package com.walkdog.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum PetStatusEnum {

    READY_TO_ADOPTION("READY_TO_ADOPTION"),
    READY_TO_ADPTION_TEMPORARY_HOUSE("READY_TO_ADPTION_TEMPORARY_HOUSE"),
    ADOPTED("ADOPTED"),
    URGENT("URGENT"),
    DELETED("DELETED");

    private final String status;

    public static PetStatusEnum valueOfByValue(String petStatus) {
        return Stream.of(PetStatusEnum.values())
                .filter(petStatusEnum -> petStatusEnum.status.equals(petStatus))
                .findAny()
                .orElse(null);
    }
}
