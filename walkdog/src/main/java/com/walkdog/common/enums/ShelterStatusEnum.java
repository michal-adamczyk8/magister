package com.walkdog.common.enums;

import lombok.RequiredArgsConstructor;

import java.util.stream.Stream;

@RequiredArgsConstructor
public enum ShelterStatusEnum {
    ACTIVE("ACTIVE"), SUSPENDED("SUSPENDED"), DELETED("SUSPENDED");

    private final String statusName;

    public static ShelterStatusEnum valueOfByValue(String processStatus) {
        return Stream.of(ShelterStatusEnum.values())
                .filter(shelterStatusEnum -> shelterStatusEnum.statusName.equals(processStatus))
                .findAny()
                .orElse(null);
    }
}
