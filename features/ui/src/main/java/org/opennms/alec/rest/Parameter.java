package org.opennms.alec.rest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(builder = ParameterBuilderImpl.Builder.class)
public interface Parameter {
    Double getAlpha();
    Double getBeta();
    Double getEpsilon();
    String getDistanceMeasure();
    String getEngine();
}
