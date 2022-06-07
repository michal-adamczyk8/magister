package com.walkdog.domain.pet.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePetRequest {
    private String type;
    private String name;
    private String sex;
    private String raceType;
    private Integer birthYear;
    private Integer birthMonth;
    private Double weight;
    private String admittanceDate;
    private String description;
    private String foundPlace;
    private Long shelterId;
    private String status;
    private String imageUrl;
}
