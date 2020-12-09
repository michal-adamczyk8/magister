package com.walkdog.domain.shelter.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.domain.shelter.controller.request.CreateShelterRequest;
import com.walkdog.domain.shelter.repository.ShelterRepository;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import com.walkdog.domain.shelter.service.dto.ShelterAddressDto;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ShelterService extends BaseService<ShelterDto, ShelterEntity> {
    private final ShelterRepository shelterRepository;

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
                .imagePath(request.getImagePath())
                .createdAt(LocalDate.now())
                .createdBy("admin").build();

        return mapToDto(shelterRepository.save(mapToEntity(newShelter)));
    }

    public List<ShelterDto> getAllShelters() {
        return mapToDto(shelterRepository.findAll());
    }

    public ShelterDto getShelterByName(String shelterName) {
        return mapToDto(shelterRepository.findByShelterName(shelterName));
    }
}
