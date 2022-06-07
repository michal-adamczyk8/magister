package com.walkdog.common.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.stream.Stream;

@RequiredArgsConstructor
@Getter
public enum TakerStatus {
    ACTIVE("Aktywny"), INACTIVE("Nieaktywny");

    private final String statusName;

    public static TakerStatus valueOvByValue(String statusName) {
        return Stream.of(TakerStatus.values())
                .filter(petStatus -> petStatus.statusName.equals(statusName))
                .findAny()
                .orElse(null);
    }

    @JsonValue
    public String toValue() {
        return statusName;
    }
}
