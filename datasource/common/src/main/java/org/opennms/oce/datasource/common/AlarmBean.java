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

package org.opennms.oce.datasource.common;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.opennms.oce.datasource.api.Alarm;
import org.opennms.oce.datasource.api.ResourceKey;
import org.opennms.oce.datasource.api.Severity;

public class AlarmBean implements Alarm {
    private String id;
    private long time;
    private List<ResourceKey> resourceKeys = new ArrayList<>();
    private Severity severity;

    public AlarmBean() {
        this(null);
    }

    public AlarmBean(String id) {
        this(id, System.currentTimeMillis());
    }

    public AlarmBean(String id, long time) {
        this.id = id;
        this.time = time;
    }

    @Override
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    @Override
    public List<ResourceKey> getResourceKeys() {
        return resourceKeys;
    }

    @Override
    public boolean isClear() {
        return Severity.CLEARED.equals(severity);
    }

    public void setResourceKeys(List<ResourceKey> resourceKeys) {
        this.resourceKeys = resourceKeys;
    }

    @Override
    public Severity getSeverity() {
        return severity;
    }

    public void setSeverity(Severity severity) {
        this.severity = severity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AlarmBean alarmBean = (AlarmBean) o;
        return time == alarmBean.time &&
                Objects.equals(id, alarmBean.id) &&
                Objects.equals(resourceKeys, alarmBean.resourceKeys) &&
                severity == alarmBean.severity;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, time, resourceKeys, severity);
    }

    @Override
    public String toString() {
        return "AlarmBean{" +
                "id='" + id + '\'' +
                ", time=" + time +
                ", resourceKeys=" + resourceKeys +
                ", severity=" + severity +
                '}';
    }
}