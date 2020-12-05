package com.walkdog.domain.shelter.repository.entity;

import com.walkdog.domain.shelter.service.dto.ShelterAddressDto;

import java.time.LocalDate;

public class ShelterEntity {
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
