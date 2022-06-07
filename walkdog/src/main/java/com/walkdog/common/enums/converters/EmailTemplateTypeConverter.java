package com.walkdog.common.enums.converters;

import com.walkdog.common.enums.EmailTemplateType;

import javax.persistence.AttributeConverter;

public class EmailTemplateTypeConverter implements AttributeConverter<EmailTemplateType, String> {

    @Override
    public String convertToDatabaseColumn(EmailTemplateType emailTemplateType) {
        return emailTemplateType.getName();
    }

    @Override
    public EmailTemplateType convertToEntityAttribute(String databaseValue) {
        return EmailTemplateType.valueOfByValue(databaseValue);
    }
}
