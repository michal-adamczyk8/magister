package com.walkdog.domain.pet.service.dto;

import com.walkdog.common.enums.PetSexEnum;
import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.common.enums.PetTypeEnum;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PetDto {
    private Long id;
    private PetTypeEnum type;
    private String name;
    private PetSexEnum sex;
    private String raceType;
    private Integer birthYear;
    private Integer birthMonth;
    private Double weight;
    private LocalDate admittanceDate;
    private String description;
    private String foundPlace;
    private ShelterDto shelterDto;
    private PetStatusEnum status;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;
}
