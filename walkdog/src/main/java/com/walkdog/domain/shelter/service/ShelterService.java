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

@Service
@RequiredArgsConstructor
public class ShelterService extends BaseService<ShelterDto, ShelterEntity> {
    private final ShelterRepository shelterRepository;

    public ShelterDto addNewShelter(final CreateShelterRequest request) {
        ShelterAddressDto address = ShelterAddressDto.builder()
                .streetName(request.getAddress().getStreetName())
                .houseNumber(request.getAddress().getHouseNumber())
                .flatNumber(request.getAddress().getFlatNumber())
                .city(request.getAddress().getCity())
                .zipCode(request.getAddress().getZipCode())
                .createdBy("admin")
                .createdAt(LocalDate.now())
                .build();

        ShelterDto newShelter = ShelterDto.builder()
                .name(request.getName())
                .phoneNumber(request.getPhoneNumber())
                .email(request.getEmail())
                .nip(request.getNip())
                .regon(request.getRegon())
                .krs(request.getKrs())
                .description(request.getDescription())
                .address(address)
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
        return mapToDto(shelterRepository.findAllByStatusOrderByCreatedAtDesc(ShelterStatusEnum.ACTIVE));
    }

    public ShelterDto deleteShelter(final Long shelterId) throws ResourceNotFoundException {
        ShelterDto shelterDto = mapToDto(shelterRepository.findById(shelterId).orElseThrow(() -> new ResourceNotFoundException(String.format(ErrorCodes.SHELTER_NOT_FOUND_ERROR_CODE, shelterId))));
        shelterDto.setStatus(ShelterStatusEnum.DELETED);
        shelterDto.setModifiedBy("admin");
        shelterDto.setModifiedAt(LocalDate.now());
        return mapToDto(shelterRepository.save(mapToEntity(shelterDto)));
    }

    public ShelterDto getSingleShelter(final Long shelterId) throws ResourceNotFoundException {
        return mapToDto(shelterRepository.findById(shelterId).orElseThrow(() -> new ResourceNotFoundException(String.format(ErrorCodes.SHELTER_NOT_FOUND_ERROR_CODE, shelterId))));
    }

    public ShelterDto getActiveShelterById(final Long shelterId) throws ResourceNotFoundException {
        ShelterDto shelter =  mapToDto(shelterRepository.findById(shelterId).orElseThrow(() -> new ResourceNotFoundException(String.format(ErrorCodes.SHELTER_NOT_FOUND_ERROR_CODE, shelterId))));
        if (!ShelterStatusEnum.ACTIVE.equals(shelter.getStatus())) {
            throw new ResourceNotFoundException(String.format(ErrorCodes.SHELTER_NOT_IN_ACTIVE_STATUS_ERROR_CODE, shelterId));
        }
        return shelter;
    }

    public ShelterDto editShelter(final ShelterDto shelterDto) {
        return mapToDto(shelterRepository.save(mapToEntity(shelterDto)));
    }

    public ShelterDto mapShelterToDto(final ShelterEntity shelterEntity) {
        return mapToDto(shelterEntity);
    }
}
