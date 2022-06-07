package com.walkdog.common.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum PetSexEnum {

    DOG_MALE("Pies"), DOG_FEMALE("Suczka"), CAT_MALE("Kot"), CAT_FEMALE("Kocica");

    private final String sex;

    public static PetSexEnum valueOfByValue(String petSex) {
        return Stream.of(PetSexEnum.values())
                .filter(petSexEnum -> petSexEnum.sex.equals(petSex))
                .findAny()
                .orElse(null);
    }


    @JsonValue
    public String toValue() {
        return sex;
    }
}
