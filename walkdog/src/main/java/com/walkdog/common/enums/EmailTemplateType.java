package com.walkdog.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum EmailTemplateType {

    ADDED_USER_REGISTRATION_EMAIL("Dodanie nowego użytkownika"),
    USER_REGISTRATION_EMAIL("Rejestracja nowego użytkownika"),
    NEW_PET_ADDED("Nowy zwierzak został dodany"),
    WALK_CONFIRMATION("Potwierdzenie spotkania"),
    WALK_CANCELLATION("Anulowanie spotkania");

    private String name;

    public static EmailTemplateType valueOfByValue(String mailTemplateType) {
        return Stream.of(EmailTemplateType.values())
                .filter(mailTypeEnum -> mailTypeEnum.name.equals(mailTemplateType))
                .findAny()
                .orElse(null);
    }
}
