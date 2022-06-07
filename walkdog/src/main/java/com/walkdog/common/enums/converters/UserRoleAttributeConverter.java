package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.UserRole;

import javax.persistence.AttributeConverter;

public class UserRoleAttributeConverter implements AttributeConverter<UserRole, String> {

    @Override
    public String convertToDatabaseColumn(UserRole userRole) {
        return userRole.name();
    }

    @Override
    public UserRole convertToEntityAttribute(String columnValue) {
        return UserRole.valueOf(columnValue);
    }
}
