package com.walkdog.domain.shelter.service.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ShelterAddressDto {
    private Long shelterAddressId;
    private Long shelterId;
    private String streetName;
    private String houseNumber;
    private String flatNumber;
    private String city;
    private String zipCode;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;
}
