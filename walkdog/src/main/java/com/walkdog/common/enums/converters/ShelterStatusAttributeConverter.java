package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.ShelterStatusEnum;

import javax.persistence.AttributeConverter;

public class ShelterStatusAttributeConverter implements AttributeConverter<ShelterStatusEnum, String> {

    @Override
    public String convertToDatabaseColumn(ShelterStatusEnum shelterStatusEnum) {
        return shelterStatusEnum.getStatusName();
    }

    @Override
    public ShelterStatusEnum convertToEntityAttribute(String columnValue) {
        return ShelterStatusEnum.valueOfByValue(columnValue);
    }
}
