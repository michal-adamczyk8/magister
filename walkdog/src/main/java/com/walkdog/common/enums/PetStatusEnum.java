package com.walkdog.common.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.stream.Stream;

@AllArgsConstructor
@Getter
public enum PetStatusEnum {

    READY_TO_ADOPTION("Gotowy do adopcji"),
    READY_TO_ADPTION_TEMPORARY_HOUSE("Gotowy do adopcji z domu tymczasowego"),
    ADOPTED("Adoptowany"),
    URGENT("Do pilnej adopcji"),
    DELETED("Niekatualne"),
    PREPARED_FOR_ADOPTION("Przygotowywany do adopcji");

    private final String status;

    public static PetStatusEnum valueOfByValue(String petStatus) {
        return Stream.of(PetStatusEnum.values())
                .filter(petStatusEnum -> petStatusEnum.status.equals(petStatus))
                .findAny()
                .orElse(null);
    }

    @JsonValue
    public String toValue() {
        return status;
    }
}
