package org.opennms.alec.rest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(builder = ParameterImpl.Builder.class)
public interface Parameter {
    String getKey();
    String getValue();

    //Engine Parameter
    Double getAlpha();
    Double getBeta();
    Double getEpsilon();
    String getDistanceMeasure();
    String getEngine();
}
