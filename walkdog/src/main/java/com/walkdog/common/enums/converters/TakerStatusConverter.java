package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.TakerStatus;

import javax.persistence.AttributeConverter;

public class TakerStatusConverter implements AttributeConverter<TakerStatus, String> {
    @Override
    public String convertToDatabaseColumn(TakerStatus takerStatus) {
        return takerStatus.getStatusName();
    }

    @Override
    public TakerStatus convertToEntityAttribute(String dbValue) {
        return TakerStatus.valueOvByValue(dbValue);
    }
}
