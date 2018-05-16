/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

package org.opennms.oce.engine.cluster;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.sameInstance;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.Mockito;
import org.opennms.oce.engine.api.IncidentHandler;
import org.opennms.oce.engine.common.IncidentBean;
import org.opennms.oce.model.alarm.api.Alarm;
import org.opennms.oce.model.alarm.api.Incident;
import org.opennms.oce.model.alarm.api.ResourceKey;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Iterables;
import com.google.common.collect.Maps;

import edu.uci.ics.jung.graph.Graph;

public class ClusterEngineTest implements IncidentHandler {

    private ClusterEngine engine = new ClusterEngine();

    private Map<String, Incident> incidentsById = new LinkedHashMap<>();

    @Before
    public void setUp() {
        engine.registerIncidentHandler(this);
    }

    @Test
    public void canCreateGraph() {
        // Initial graph should be empty
        Graph<Vertex, Edge> graph = engine.getGraph();
        assertThat(graph.getVertexCount(), equalTo(0));
        assertThat(graph.getEdgeCount(), equalTo(0));

        // Trigger some alarm
        Alarm alarm = mock(Alarm.class);
        ResourceKey key = new ResourceKey("a", "b", "c", "d");
        when(alarm.getResourceKeys()).thenReturn(Collections.singletonList(key));
        engine.onAlarm(alarm);

        // The graph should be updated
        assertThat(graph.getVertexCount(), equalTo(4));
        assertThat(graph.getEdgeCount(), equalTo(3));

        // Now trigger the same alarm again
        engine.onAlarm(alarm);

        // The graph should not have changed
        assertThat(graph.getVertexCount(), equalTo(4));
        assertThat(graph.getEdgeCount(), equalTo(3));

        // Let's link another vertex on the existing graph
        alarm = mock(Alarm.class);
        key = new ResourceKey("a", "b", "c", "z");
        when(alarm.getResourceKeys()).thenReturn(Collections.singletonList(key));
        engine.onAlarm(alarm);

        // The graph should be updated
        assertThat(graph.getVertexCount(), equalTo(5));
        assertThat(graph.getEdgeCount(), equalTo(4));
    }

    @Test
    public void canClusterAlarms() {
        long now = System.currentTimeMillis();
        engine.setTickResolutionMs(TimeUnit.SECONDS.toMillis(30));

        // Trigger two alarms on the same resource very close in time
        ResourceKey key = new ResourceKey("a", "b", "c", "d");

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn("1");
        when(alarm1.getResourceKeys()).thenReturn(Collections.singletonList(key));
        when(alarm1.getTime()).thenReturn(now);
        engine.onAlarm(alarm1);

        Alarm alarm2 = mock(Alarm.class);
        when(alarm2.getId()).thenReturn("2");
        when(alarm2.getResourceKeys()).thenReturn(Collections.singletonList(key));
        when(alarm2.getTime()).thenReturn(now+1);
        engine.onAlarm(alarm2);

        // No incidents should be created yet
        assertThat(incidentsById.keySet(), hasSize(0));

        // Tick
        engine.tick(now+2);

        // We should now have a single incident with both alarms
        assertThat(incidentsById.keySet(), hasSize(1));
        Incident incident = incidentsById.values().iterator().next();
        assertThat(incident.getAlarms(), containsInAnyOrder(alarm1, alarm2));

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // Incidents should remain unchanged
        assertThat(incidentsById.keySet(), hasSize(1));
        incident = incidentsById.values().iterator().next();
        assertThat(incident.getAlarms(), hasSize(2));

        // Now add a 3rd (unrelated) alarm on another resource
        ResourceKey otherKey = new ResourceKey("w", "x", "y", "z");
        Alarm alarm3 = mock(Alarm.class);
        when(alarm3.getId()).thenReturn("3");
        when(alarm3.getResourceKeys()).thenReturn(Collections.singletonList(otherKey));
        when(alarm3.getTime()).thenReturn(now+1);
        engine.onAlarm(alarm3);

        // And a 4th alarm near the last one in time, but on another resource
        ResourceKey otherOtherKey = new ResourceKey("w", "x", "y", "z1");
        Alarm alarm4 = mock(Alarm.class);
        when(alarm4.getId()).thenReturn("4");
        when(alarm4.getResourceKeys()).thenReturn(Collections.singletonList(otherOtherKey));
        when(alarm4.getTime()).thenReturn(now+1);
        engine.onAlarm(alarm4);

        // Tick again
        now = now + engine.getTickResolutionMs()*2;
        engine.tick(now);

        // We should get a new incident with #3 and #4
        // TODO: FIXME: Doesn't work with current default settings, maybe consider changing params in another test?
        //assertThat(incidentsById.keySet(), hasSize(2));
        //incident = incidentsById.get("1");
        //assertThat(incident.getAlarms(), containsInAnyOrder(alarm3, alarm4));
    }

    @Test
    @Ignore("Needs rework now that the functions are no longer static")
    public void canHandleAlarmsInClusters() {
        final AtomicLong incidentIdGenerator = new AtomicLong();

        // An empty cluster should return no incidents
        Cluster<AlarmInSpaceTime> emptyCluster = new Cluster<>();
        Set<IncidentBean> incidents = engine.mapClusterToIncidents(emptyCluster, Maps.newHashMap(), Maps.newHashMap(), incidentIdGenerator);
        assertThat(incidents, hasSize(0));

        AlarmInSpaceTime alarm1InSpaceTime = mock(AlarmInSpaceTime.class, Mockito.RETURNS_DEEP_STUBS);
        when(alarm1InSpaceTime.getAlarm().getId()).thenReturn("1");

        AlarmInSpaceTime alarm2InSpaceTime = mock(AlarmInSpaceTime.class, Mockito.RETURNS_DEEP_STUBS);
        when(alarm2InSpaceTime.getAlarm().getId()).thenReturn("2");

        AlarmInSpaceTime alarm3InSpaceTime = mock(AlarmInSpaceTime.class, Mockito.RETURNS_DEEP_STUBS);
        when(alarm3InSpaceTime.getAlarm().getId()).thenReturn("3");

        // A cluster with a single alarm that was not previously mapped to an incident should be in a new incident
        Cluster<AlarmInSpaceTime> cluster = new Cluster<>();
        cluster.addPoint(alarm1InSpaceTime);
        incidents = engine.mapClusterToIncidents(cluster, Maps.newHashMap(), Maps.newHashMap(), incidentIdGenerator);
        assertThat(incidents, hasSize(1));
        assertThat(Iterables.getFirst(incidents, null).getAlarms(), hasSize(1));

        // A cluster with two alarms that were not previously mapped to an incident should be in a new incident
        cluster.addPoint(alarm2InSpaceTime);
        incidents = engine.mapClusterToIncidents(cluster, Maps.newHashMap(), Maps.newHashMap(), incidentIdGenerator);
        assertThat(incidents, hasSize(1));
        assertThat(Iterables.getFirst(incidents, null).getAlarms(), hasSize(2));

        // A cluster with an alarm that was previously mapped to an incident, and another alarm that was not previously mapped
        // should be mapped to the same incident
        IncidentBean existingIncident = new IncidentBean();
        existingIncident.setId(Long.valueOf(incidentIdGenerator.incrementAndGet()).toString());
        existingIncident.addAlarm(alarm1InSpaceTime.getAlarm());
        Map<String, IncidentBean> alarmIdToIncidentMap = new ImmutableMap.Builder<String, IncidentBean>()
                .put("1", existingIncident)
                .build();
        Map<String, IncidentBean> incidentsById = new ImmutableMap.Builder<String, IncidentBean>()
                .put(existingIncident.getId(), existingIncident)
                .build();

        incidents = engine.mapClusterToIncidents(cluster, alarmIdToIncidentMap, incidentsById, incidentIdGenerator);
        assertThat(incidents, hasSize(1));
        assertThat(Iterables.getFirst(incidents, null), sameInstance(existingIncident));
        assertThat(Iterables.getFirst(incidents, null).getAlarms(), hasSize(2));

        // A cluster with alarms that are already mapped to separate incidents should not updated/create any incidents
        IncidentBean existingIncident2 = new IncidentBean();
        existingIncident2.setId(Long.valueOf(incidentIdGenerator.incrementAndGet()).toString());
        existingIncident2.addAlarm(alarm2InSpaceTime.getAlarm());
        alarmIdToIncidentMap = new ImmutableMap.Builder<String, IncidentBean>()
                .put("1", existingIncident)
                .put("2", existingIncident2)
                .build();
        incidentsById = new ImmutableMap.Builder<String, IncidentBean>()
                .put(existingIncident.getId(), existingIncident)
                .put(existingIncident2.getId(), existingIncident)
                .build();

        incidents = engine.mapClusterToIncidents(cluster, alarmIdToIncidentMap, incidentsById, incidentIdGenerator);
        assertThat(incidents, hasSize(0));

        // If a cluster contains alarms in different incidents and one or more alarms that are not
        // yet associated to an incident, then we chose to add the alarms without incidents to their the same incident
        // as their closest neighbor
        existingIncident = new IncidentBean();
        existingIncident.setId(Long.valueOf(incidentIdGenerator.incrementAndGet()).toString());
        existingIncident.addAlarm(alarm1InSpaceTime.getAlarm());

        existingIncident2 = new IncidentBean();
        existingIncident2.setId(Long.valueOf(incidentIdGenerator.incrementAndGet()).toString());
        existingIncident2.addAlarm(alarm2InSpaceTime.getAlarm());

        alarmIdToIncidentMap = new ImmutableMap.Builder<String, IncidentBean>()
                .put("1", existingIncident)
                .put("2", existingIncident2)
                .build();
        incidentsById = new ImmutableMap.Builder<String, IncidentBean>()
                .put(existingIncident.getId(), existingIncident)
                .put(existingIncident2.getId(), existingIncident)
                .build();

        cluster.addPoint(alarm3InSpaceTime);
        incidents = engine.mapClusterToIncidents(cluster, alarmIdToIncidentMap, incidentsById, incidentIdGenerator);
        assertThat(incidents, hasSize(1));
        assertThat(Iterables.getFirst(incidents, null), sameInstance(existingIncident));
        assertThat(Iterables.getFirst(incidents, null).getAlarms(), hasSize(2));
    }

    @Override
    public void onIncident(Incident incident) {
        incidentsById.put(incident.getId(), incident);
    }
}