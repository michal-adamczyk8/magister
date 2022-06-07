package com.walkdog.domain.pet.service.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.walkdog.common.enums.PetSexEnum;
import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.common.enums.PetTypeEnum;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import com.walkdog.domain.taker.service.dto.TakerDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

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

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private String admittanceDate;

    private String description;
    private String foundPlace;
    private String imageUrl;
    private ShelterDto shelterDto;
    private Set<TakerDto> takers;
    private PetStatusEnum status;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;
}
