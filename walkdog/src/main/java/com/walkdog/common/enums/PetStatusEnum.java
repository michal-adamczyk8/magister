package com.walkdog.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum PetStatusEnum {

    READY_TO_ADOPTION("GOTOWY DO ADOPCJI"),
    READY_TO_ADPTION_TEMPORARY_HOUSE("GOTOWY DO ADOPCJI Z DOMU TYMCZASOWEGO"),
    ADOPTED("ADOPTOWANY"),
    URGENT("DO PILNEJ ADOPCJI"),
    DELETED("NIEAKTUALNY"),
    PREPARED_FOR_ADOPTION("PRZYGOTOWYWANY DO ADOPCJI");

    private final String status;

    public static PetStatusEnum valueOfByValue(String petStatus) {
        return Stream.of(PetStatusEnum.values())
                .filter(petStatusEnum -> petStatusEnum.status.equals(petStatus))
                .findAny()
                .orElse(null);
    }
}
