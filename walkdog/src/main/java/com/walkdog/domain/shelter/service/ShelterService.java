package com.walkdog.domain.shelter.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.common.codes.ErrorCodes;
import com.walkdog.common.enums.ShelterStatusEnum;
import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.shelter.controller.request.CreateShelterRequest;
import com.walkdog.domain.shelter.repository.ShelterRepository;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import com.walkdog.domain.shelter.service.dto.ShelterAddressDto;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ShelterService extends BaseService<ShelterDto, ShelterEntity> {
    private final ShelterRepository shelterRepository;

    public ShelterDto addNewShelter(CreateShelterRequest request) {
        ShelterDto newShelter = ShelterDto.builder()
                .name(request.getShelterName())
                .phoneNumber(request.getPhoneNumber())
                .email(request.getEmail())
                .nip(request.getNip())
                .regon(request.getRegon())
                .krs(request.getKrs())
                .description(request.getDescription())
                .address(ShelterAddressDto.builder()
                        .streetName(request.getStreetName())
                        .houseNumber(request.getHouseNumber())
                        .flatNumber(request.getFlatNumber())
                        .city(request.getCity())
                        .zipCode(request.getZipCode())
                        .createdBy("admin")
                        .createdAt(LocalDate.now())
                        .build())
                .description(request.getDescription())
                .imagePath(request.getImagePath())
                .websiteUrl(request.getWebsiteUrl())
                .facebookUrl(request.getFacebookUrl())
                .twitterUrl(request.getTwitterUrl())
                .instagramUrl(request.getInstagramUrl())
                .bankAccount(request.getBankAccount())
                .swiftCode(request.getSwiftCode())
                .openingTime(request.getOpeningTime())
                .status(ShelterStatusEnum.ACTIVE)
                .createdAt(LocalDate.now())
                .createdBy("admin").build();

        return mapToDto(shelterRepository.save(mapToEntity(newShelter)));
    }

    public List<ShelterDto> getAllShelters() {
        return mapToDto(shelterRepository.findAllByStatus(ShelterStatusEnum.ACTIVE));
    }

    public ShelterDto deleteShelter(Long shelterId) {
        ShelterDto shelterDto = mapToDto(shelterRepository.findById(shelterId).orElseGet(null));
        shelterDto.setStatus(ShelterStatusEnum.DELETED);
        shelterDto.setModifiedBy("admin");
        shelterDto.setModifiedAt(LocalDate.now());
        return mapToDto(shelterRepository.save(mapToEntity(shelterDto)));
    }

    public ShelterDto getActiveShelterById(Long shelterId) throws ResourceNotFoundException {
        ShelterDto shelter =  mapToDto(shelterRepository.findById(shelterId).orElseGet(null));
        if (Objects.isNull(shelter)) {
            throw new ResourceNotFoundException(ErrorCodes.SHELTER_NOT_FOUND_ERROR_CODE);
        }
        if (!ShelterStatusEnum.ACTIVE.equals(shelter.getStatus())) {
            throw new ResourceNotFoundException(ErrorCodes.SHELTER_NOT_IN_ACTIVE_STATUS);
        }
        return shelter;

    }
}
