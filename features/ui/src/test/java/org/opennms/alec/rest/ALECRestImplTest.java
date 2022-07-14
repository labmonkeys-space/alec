package org.opennms.alec.rest;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.ArgumentMatchers.isNull;
import static org.mockito.Mockito.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.spy;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;

import java.util.Optional;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.junit.jupiter.MockitoExtension;
import org.opennms.alec.driver.main.Driver;
import org.opennms.alec.engine.api.EngineFactory;
import org.opennms.alec.engine.api.EngineRegistry;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;
import org.opennms.features.distributed.kvstore.api.JsonStore;
import org.osgi.framework.BundleContext;
import org.osgi.framework.InvalidSyntaxException;
import org.osgi.framework.ServiceReference;

import com.codahale.metrics.MetricRegistry;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(MockitoJUnitRunner.class)
@ExtendWith(MockitoExtension.class)
public class ALECRestImplTest {
    @Mock
    JsonStore jsonStore;
    @Mock
    BundleContext bundleContext;

    private ObjectMapper objectMapper;

    @Before
    public void setUp() throws Exception {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testPing() {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);
        try (Response result = underTest.ping()) {
            assertThat(Response.Status.OK.getStatusCode(), equalTo(result.getStatus()));
            assertThat(result.getEntity(), equalTo("pong!!"));
        }
    }

    @Test
    public void testGetConfigurations() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);
        when(jsonStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));
        when(jsonStore.get(eq(KeyEnum.AGREEMENT.toString()), anyString())).thenReturn(Optional.of("true"));

        try (Response result = underTest.getConfigurations()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            Configuration configuration = (Configuration) result.getEntity();
            assertThat(configuration.getEngineParameter().getAlpha(), equalTo(1d));
            assertThat(configuration.getEngineParameter().getBeta(), equalTo(2d));
            assertThat(configuration.getEngineParameter().getEpsilon(), equalTo(3d));
            assertThat(configuration.getEngineParameter().getDistanceMeasure(), equalTo("distanceMeasure"));
            assertThat(configuration.getEngineParameter().getEngine(), equalTo("dbscan"));
            assertThat(configuration.getKeyValues().size(), is(1));
            assertThat(configuration.getKeyValues().get(0).getKey(), equalTo(KeyEnum.AGREEMENT));
            assertThat(configuration.getKeyValues().get(0).getValue(), equalTo("true"));
        }
        verify(jsonStore, times(2)).get(anyString(), anyString());
        verifyNoMoreInteractions(jsonStore);
    }

    @Test
    public void testGetEngineConfiguration() throws JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);
        when(jsonStore.get(eq(KeyEnum.ENGINE.toString()), anyString())).thenReturn(Optional.of(getParameterAsString(getParameter().build())));

        try (Response result = underTest.getEngineConfiguration()) {
            assertThat(result.getStatus(), equalTo(Response.Status.OK.getStatusCode()));
            EngineParameter engineParameter = (EngineParameter)  result.getEntity();
            assertThat(1d, equalTo(engineParameter.getAlpha()));
            assertThat(2d, equalTo(engineParameter.getBeta()));
            assertThat(3d, equalTo(engineParameter.getEpsilon()));
            assertThat("distanceMeasure", equalTo(engineParameter.getDistanceMeasure()));
            assertThat("dbscan", equalTo(engineParameter.getEngine()));
        }
        verify(jsonStore, times(1)).get(anyString(), anyString());
        verifyNoMoreInteractions(jsonStore);
    }

    @Test
    public void testSetEngineConfiguration() throws InvalidSyntaxException, JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);

        ServiceReference<?> driverServiceReference = mock(ServiceReference.class);
        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);

        ServiceReference<?>[] driverServiceReferences = {driverServiceReference};
        ServiceReference<?>[] engineServiceReferences = {engineServiceReference};

        Driver driver = mock(Driver.class);
        DBScanEngineFactory dbScanEngineFactory = spy(DBScanEngineFactory.class);

        ArgumentCaptor  argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(jsonStore.put(anyString(), anyString(), anyString())).thenReturn(0L);
        when(bundleContext.getAllServiceReferences(anyString(), isNull())).thenAnswer(invocation -> {
            if(EngineRegistry.class.getCanonicalName().equals(invocation.getArgument(0))){
                return driverServiceReferences;
            } else if (EngineFactory.class.getCanonicalName().equals(invocation.getArgument(0))){
                return engineServiceReferences;
            }
            return null;
        });
        when(bundleContext.getService(any(ServiceReference.class))).thenAnswer(invocation -> {
            if(driverServiceReference.equals(invocation.getArgument(0))){
                return driver;
            } else if (engineServiceReference.equals(invocation.getArgument(0))) {
                return dbScanEngineFactory;
            }

            return null;
        });
        when(driver.getMetrics()).thenReturn(new MetricRegistry());

        try (Response result = underTest.setEngineConfiguration(getParameter().build())) {
            assertThat(Response.Status.OK.getStatusCode(), equalTo(result.getStatus()));
        }
        verify(jsonStore, times(1)).put(eq(KeyEnum.ENGINE.toString()), (String) argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verify(bundleContext, times(2)).getAllServiceReferences(anyString(), isNull());
        verify(bundleContext, times(2)).getService(any(ServiceReference.class));
        verifyNoMoreInteractions(bundleContext, jsonStore, driverServiceReference, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().build())));
    }

    @Test
    public void testSetEngineAlphaNullConfiguration() throws InvalidSyntaxException, JsonProcessingException {
        ALECRestImpl underTest = new ALECRestImpl(jsonStore, bundleContext);

        ServiceReference<?> driverServiceReference = mock(ServiceReference.class);
        ServiceReference<?> engineServiceReference = mock(ServiceReference.class);

        ServiceReference<?>[] driverServiceReferences = {driverServiceReference};
        ServiceReference<?>[] engineServiceReferences = {engineServiceReference};

        Driver driver = mock(Driver.class);
        DBScanEngineFactory dbScanEngineFactory = spy(DBScanEngineFactory.class);

        ArgumentCaptor  argumentCaptor = ArgumentCaptor.forClass(String.class);

        when(jsonStore.put(anyString(), anyString(), anyString())).thenReturn(0L);
        when(bundleContext.getAllServiceReferences(anyString(), isNull())).thenAnswer(invocation -> {
            if(EngineRegistry.class.getCanonicalName().equals(invocation.getArgument(0))){
                return driverServiceReferences;
            } else if (EngineFactory.class.getCanonicalName().equals(invocation.getArgument(0))){
                return engineServiceReferences;
            }
            return null;
        });
        when(bundleContext.getService(any(ServiceReference.class))).thenAnswer(invocation -> {
            if(driverServiceReference.equals(invocation.getArgument(0))){
                return driver;
            } else if (engineServiceReference.equals(invocation.getArgument(0))) {
                return dbScanEngineFactory;
            }

            return null;
        });
        when(driver.getMetrics()).thenReturn(new MetricRegistry());

        try (Response result = underTest.setEngineConfiguration(getParameter().alpha(null).build())) {
            assertThat(Response.Status.OK.getStatusCode(), equalTo(result.getStatus()));
        }
        verify(jsonStore, times(1)).put(eq(KeyEnum.ENGINE.toString()), (String) argumentCaptor.capture(), eq(ALECRestImpl.ALEC_CONFIG));
        verify(bundleContext, times(2)).getAllServiceReferences(anyString(), isNull());
        verify(bundleContext, times(2)).getService(any(ServiceReference.class));
        verifyNoMoreInteractions(bundleContext, jsonStore, driverServiceReference, engineServiceReference);

        assertThat(argumentCaptor.getValue(), equalTo(getParameterAsString(getParameter().alpha(DBScanEngine.DEFAULT_ALPHA).build())));
    }

    private EngineParameterImpl.Builder getParameter() {
        return EngineParameterImpl.newBuilder()
                .alpha(1d)
                .beta(2d)
                .epsilon(3d)
                .distanceMeasure("distanceMeasure")
                .engine("dbscan");
    }

    private String getParameterAsString(EngineParameter engineParameter) throws JsonProcessingException {
        return objectMapper.writeValueAsString(engineParameter);
    }

    private KeyValueImpl.Builder getKeyValueAgreement() throws JsonProcessingException {
        return KeyValueImpl.newBuilder()
                .key(KeyEnum.AGREEMENT)
                .value("true");
    }
}