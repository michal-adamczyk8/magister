package com.walkdog.domain.shelter.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class ShelterDto {
    private Long shelterId;
    private String shelterName;
    private String phoneNumber;
    private String email;
    private String nip;
    private String regon;
    private ShelterAddressDto address;
    private String description;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;
}
