package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.PetStatusEnum;

import javax.persistence.AttributeConverter;

public class PetStatusAttributeConverter implements AttributeConverter<PetStatusEnum, String> {

    @Override
    public String convertToDatabaseColumn(PetStatusEnum petStatusEnum) {
        return petStatusEnum.getStatus();
    }

    @Override
    public PetStatusEnum convertToEntityAttribute(String columnValue) {
        return PetStatusEnum.valueOfByValue(columnValue);
    }
}
