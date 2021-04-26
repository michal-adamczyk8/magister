package com.walkdog.domain.pet.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreatePetRequest {
    private String _type;
    private String _name;
    private String _sex;
    private String _raceType;
    private Integer _birthYear;
    private Integer _birthMonth;
    private Double _weight;
    private LocalDate _admittanceDate;
    private String _description;
    private String _foundPlace;
    private Long _shelterId;
    private String _status;
}
