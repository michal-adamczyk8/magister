package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.PetTypeEnum;

import javax.persistence.AttributeConverter;

public class PetTypeAttributeConverter implements AttributeConverter<PetTypeEnum, String> {
    @Override
    public String convertToDatabaseColumn(PetTypeEnum petTypeEnum) {
        return petTypeEnum.getPetType();
    }

    @Override
    public PetTypeEnum convertToEntityAttribute(String columnValue) {
        return PetTypeEnum.valueOfByValue(columnValue);
    }
}
