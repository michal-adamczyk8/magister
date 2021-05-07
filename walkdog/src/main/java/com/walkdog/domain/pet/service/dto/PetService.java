package com.walkdog.domain.pet.service.dto;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.common.codes.ErrorCodes;
import com.walkdog.common.enums.PetSexEnum;
import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.common.enums.PetTypeEnum;
import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.pet.controller.request.CreatePetRequest;
import com.walkdog.domain.pet.repository.PetRepository;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.shelter.service.ShelterService;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class PetService extends BaseService<PetDto, PetEntity> {

    private final PetRepository petRepository;
    private final ShelterService shelterService;


    public List<PetDto> getAllPetsByShelter(Long shelterId) throws ResourceNotFoundException {
        ShelterDto shelterDto = shelterService.getActiveShelterById(shelterId);

        return mapToDto(petRepository.findAllByShelterIdAndStatusNotIn(shelterDto.getId(), List.of(PetStatusEnum.ADOPTED, PetStatusEnum.DELETED)));
    }

    public PetDto addNewPet(CreatePetRequest request) throws ResourceNotFoundException {
        PetDto newPet = PetDto.builder()
                .name(request.get_name())
                .type(PetTypeEnum.valueOfByValue(request.get_type()))
                .sex(PetSexEnum.valueOfByValue(request.get_sex()))
                .raceType(request.get_raceType())
                .birthYear(request.get_birthYear())
                .birthMonth(request.get_birthMonth())
                .weight(request.get_weight())
                .admittanceDate(request.get_admittanceDate())
                .description(request.get_description())
                .foundPlace(request.get_foundPlace())
                .shelterDto(shelterService.getActiveShelterById(request.get_shelterId()))
                .status(PetStatusEnum.valueOfByValue(request.get_status()))
                //TODO: ogarnięcie wpisywania użytkownika
                .createdBy("admin")
                .createdAt(LocalDate.now())
                .build();

        return mapToDto(petRepository.save(mapToEntity(newPet)));
    }

    public PetDto deletePet(Long petId) throws ResourceNotFoundException {
        PetDto petDto = mapToDto(petRepository.findById(petId).orElse(null));
        if (Objects.isNull(petDto)) {
            throw new ResourceNotFoundException(String.format(ErrorCodes.PET_NOT_FOUND_ERROR_CODE, petId));
        }
        petDto.setStatus(PetStatusEnum.DELETED);
        petDto.setModifiedBy("admin");
        petDto.setModifiedAt(LocalDate.now());
        return mapToDto(petRepository.save(mapToEntity(petDto)));
    }
}
