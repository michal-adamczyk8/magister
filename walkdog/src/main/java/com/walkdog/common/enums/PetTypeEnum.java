package com.walkdog.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum PetTypeEnum {

    DOG("DOG"), CAT("CAT");

    private final String petType;

    public static PetTypeEnum valueOfByValue(String petType) {
        return Stream.of(PetTypeEnum.values())
                .filter(petTypeEnum -> petTypeEnum.petType.equals(petType))
                .findAny()
                .orElse(null);
    }
}
