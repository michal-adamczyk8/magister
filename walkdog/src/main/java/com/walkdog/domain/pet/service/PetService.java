package com.walkdog.domain.pet.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.common.codes.ErrorCodes;
import com.walkdog.common.enums.PetSexEnum;
import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.common.enums.PetTypeEnum;
import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.pet.controller.request.CreatePetRequest;
import com.walkdog.domain.pet.controller.response.CatPictureResponse;
import com.walkdog.domain.pet.controller.response.DogPictureResponse;
import com.walkdog.domain.pet.repository.PetRepository;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.pet.service.dto.PetDto;
import com.walkdog.domain.shelter.service.ShelterService;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PetService extends BaseService<PetDto, PetEntity> {

    private final PetRepository petRepository;
    private final ShelterService shelterService;


    public PetDto findById(final long id) {
        return mapToDto(petRepository.findById(id).orElseThrow());
    }

    public Page<PetDto> getAllActivePets(final int page, final int size) {
        return mapToDto(petRepository.findAllByStatusNotInOrderByCreatedAtDesc(List.of(PetStatusEnum.ADOPTED, PetStatusEnum.DELETED), PageRequest.of(page, size)));
    }

    public Page<PetDto> getAllPetsByShelter(final long shelterId, final int page, final int size) {
        List<String> notAllowedStatuses = List.of(PetStatusEnum.ADOPTED.name(), PetStatusEnum.DELETED.name());
        return mapToDto(petRepository.findAllByShelterIdAndStatusNotInOrderByCreatedAtDesc(shelterId, notAllowedStatuses, PageRequest.of(page, size)));
    }


    public Page<PetDto> getAllPetsByTaker(final long takerId, final int page, final int size) {
        List<String> notAllowedStatuses = List.of(PetStatusEnum.ADOPTED.getStatus(), PetStatusEnum.DELETED.getStatus());
        return mapToDto(petRepository.findAllByTakerIdAndStatusNotInOrderByCreatedAtDesc(takerId, notAllowedStatuses, PageRequest.of(page, size)));
    }

    public PetDto addNewPet(final CreatePetRequest request) throws ResourceNotFoundException {
        PetDto newPet = PetDto.builder()
                .name(request.getName())
                .type(PetTypeEnum.valueOfByValue(request.getType()))
                .sex(PetSexEnum.valueOfByValue(request.getSex()))
                .raceType(request.getRaceType())
                .birthYear(request.getBirthYear())
                .birthMonth(request.getBirthMonth())
                .weight(request.getWeight())
                .admittanceDate(request.getAdmittanceDate())
                .description(request.getDescription())
                .foundPlace(request.getFoundPlace())
                .shelterDto(shelterService.getActiveShelterById(request.getShelterId()))
                .status(PetStatusEnum.valueOfByValue(request.getStatus()))
                .imageUrl(request.getImageUrl())
                .createdBy("admin")
                .createdAt(LocalDate.now())
                .build();

        return mapToDto(petRepository.save(mapToEntity(newPet)));
    }

    public PetDto deletePet(final long petId) throws ResourceNotFoundException {
        PetDto petDto = mapToDto(petRepository.findById(petId).orElseThrow(() -> new ResourceNotFoundException(String.format(ErrorCodes.PET_NOT_FOUND_ERROR_CODE, petId))));
        petDto.setStatus(PetStatusEnum.DELETED);
        petDto.setModifiedBy("admin");
        petDto.setModifiedAt(LocalDate.now());
        return mapToDto(petRepository.save(mapToEntity(petDto)));
    }

    public PetDto getSinglePet(final long petId) throws ResourceNotFoundException {
        PetEntity petEntity = petRepository.findById(petId).orElseThrow(
                () -> new ResourceNotFoundException(String.format(ErrorCodes.PET_NOT_FOUND_ERROR_CODE, petId)));
        ShelterDto shelterDto = shelterService.mapShelterToDto(petEntity.getShelter());
        PetDto petDto = mapToDto(petEntity);
        petDto.setShelterDto(shelterDto);
        return petDto;
    }

    public void updatePictures() {
        List<PetEntity> pets = petRepository.findAll();
        RestTemplate restTemplate = new RestTemplate();
        String dogPictureUrl = "https://dog.ceo/api/breeds/image/random";
        String catPictureUrl = "https://cataas.com/cat?json=true";
        pets.stream().filter(pet -> null == pet.getImageUrl())
                .forEach(pet -> {
                            if (PetTypeEnum.DOG.equals(pet.getType())) {
                                ResponseEntity<DogPictureResponse> response = restTemplate.getForEntity(dogPictureUrl, DogPictureResponse.class);
                                pet.setImageUrl(response.getBody().getMessage());
                            }
                            else {
                                ResponseEntity<CatPictureResponse> catResponse = restTemplate.getForEntity(catPictureUrl, CatPictureResponse.class);
                                pet.setImageUrl("https://cataas.com" + catResponse.getBody().getUrl());
                            }
                        }
                );
        petRepository.saveAll(pets);
    }

    public PetDto editPet(final PetDto petDto) {
        return mapToDto(petRepository.save(mapToEntity(petDto)));
    }
}

