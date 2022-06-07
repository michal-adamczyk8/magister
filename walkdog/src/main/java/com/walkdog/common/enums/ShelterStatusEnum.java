package com.walkdog.common.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.stream.Stream;

@RequiredArgsConstructor
@Getter
public enum ShelterStatusEnum {

    ACTIVE("Aktywne"), SUSPENDED("Zawieszone"), DELETED("Usunięte");

    private final String statusName;

    public static ShelterStatusEnum valueOfByValue(String processStatus) {
        return Stream.of(ShelterStatusEnum.values())
                .filter(shelterStatusEnum -> shelterStatusEnum.statusName.equals(processStatus))
                .findAny()
                .orElse(null);
    }

    @JsonValue
    public String toValue() {
        return statusName;
    }

}
