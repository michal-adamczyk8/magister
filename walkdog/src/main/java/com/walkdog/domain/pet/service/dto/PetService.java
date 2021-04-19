package com.walkdog.domain.pet.service.dto;

import com.walkdog.common.abstracts.BaseService;
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
                .name(request.getName())
                .type(PetTypeEnum.valueOf(request.getType()))
                .sex(PetSexEnum.valueOf(request.getSex()))
                .raceType(request.getRaceType())
                .birthYear(request.getBirthYear())
                .birthMonth(request.getBirthMonth())
                .weight(request.getWeight())
                .admittanceDate(request.getAdmittanceDate())
                .description(request.getDescription())
                .foundPlace(request.getFoundPlace())
                .shelterDto(shelterService.getActiveShelterById(request.getShelterId()))
                .status(PetStatusEnum.valueOfByValue(request.getStatus()))
                //TODO: ogarnięcie wpisywania użytkownika
                .createdBy("admin")
                .createdAt(LocalDate.now())
                .build();

        return mapToDto(petRepository.save(mapToEntity(newPet)));
    }

    public PetDto deletePet(Long petId) {
        PetDto petDto = mapToDto(petRepository.findById(petId).orElseGet(null));
        petDto.setStatus(PetStatusEnum.DELETED);
        petDto.setModifiedBy("admin");
        petDto.setModifiedAt(LocalDate.now());
        return mapToDto(petRepository.save(mapToEntity(petDto)));
    }
}
