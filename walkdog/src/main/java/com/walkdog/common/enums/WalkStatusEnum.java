package com.walkdog.common.enums;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.stream.Stream;

@Getter
@RequiredArgsConstructor
public enum WalkStatusEnum {

    CREATED("Utworzone"),
    CANCELED("Anulowane"),
    CONFIRMED("Potwierdzone");

    private final String statusName;

    public static WalkStatusEnum valueOfByValue(String processStatus) {
        return Stream.of(WalkStatusEnum.values())
                .filter(walkStatusEnum -> walkStatusEnum.statusName.equals(processStatus))
                .findAny()
                .orElse(null);
    }

    @JsonValue
    public String toValue() {
        return statusName;
    }

    public static void main(String[] args) {
        System.out.println(LocalDateTime.now());
    }
}

