package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.PetSexEnum;

import javax.persistence.AttributeConverter;

public class PetSexAttributeConverter implements AttributeConverter<PetSexEnum, String> {


    @Override
    public String convertToDatabaseColumn(PetSexEnum petSexEnum) {
        return petSexEnum.getSex();
    }

    @Override
    public PetSexEnum convertToEntityAttribute(String columnValue) {
        return PetSexEnum.valueOfByValue(columnValue);
    }
}
