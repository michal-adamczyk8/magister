package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.WalkStatusEnum;

import javax.persistence.AttributeConverter;

public class WalkStatusAttributeConverter implements AttributeConverter<WalkStatusEnum, String> {
    @Override
    public String convertToDatabaseColumn(WalkStatusEnum walkStatusEnum) {
        return walkStatusEnum.getStatusName();
    }

    @Override
    public WalkStatusEnum convertToEntityAttribute(String s) {
        return WalkStatusEnum.valueOfByValue(s);
    }
}
