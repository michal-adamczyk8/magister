package com.walkdog.domain.shelter.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.domain.shelter.controller.request.CreateShelterRequest;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import com.walkdog.domain.shelter.service.dto.ShelterAddressDto;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ShelterService extends BaseService<ShelterDto, ShelterEntity> {
    public ShelterDto addNewShelter(CreateShelterRequest request) {
        ShelterDto newShelter = ShelterDto.builder()
                                          .shelterName(request.getShelterName())
                                          .phoneNumber(request.getPhoneNumber())
                                          .email(request.getEmail())
                                          .nip(request.getNip())
                                          .regon(request.getRegon())
                                          .description(request.getDescription())
                                          .address(ShelterAddressDto.builder()
                                                                    .streetName(request.getStreetName())
                                                                    .houseNumber(request.getHouseNumber())
                                                                    .flatNumber(request.getFlatNumber())
                                                                    .city(request.getCity())
                                                                    .zipCode(request.getZipCode()).build())
                                          .description(request.getDescription())
                                          .createdAt(LocalDate.now())
                                          .createdBy("admin").build();
        return newShelter;
    }
}
