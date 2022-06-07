package com.walkdog.domain.shelter.controller;

import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.pet.service.dto.PetDto;
import com.walkdog.domain.pet.service.PetService;
import com.walkdog.domain.shelter.controller.request.CreateShelterRequest;
import com.walkdog.domain.shelter.service.ShelterService;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import com.walkdog.domain.taker.service.TakerService;
import com.walkdog.domain.taker.service.dto.TakerDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shelter")
@RequiredArgsConstructor
@Slf4j
public class ShelterController {

    private final ShelterService shelterService;
    private final PetService petService;
    private final TakerService takerService;

    @GetMapping(path = "/all")
    public List<ShelterDto> getAllActiveShelters() {
        log.info("getAllActiveShelters -- ");
        return shelterService.getAllShelters();
    }

    @GetMapping(path = "/pets/{shelterId}/{page}/{size}")
    public Page<PetDto> getAllActivePetsByShelter(@PathVariable("shelterId") int shelterId,
                                                  @PathVariable("page") int page,
                                                  @PathVariable("size") int size) throws ResourceNotFoundException {
        log.info("getAllActivePetsByShelter -- shelterId: {}", shelterId);
        return petService.getAllPetsByShelter(shelterId, page, size);
    }

    @GetMapping(path = "/takers/{shelterId}/{page}/{size}")
    public Page<TakerDto> getAllActiveTakersByShelter(@PathVariable("shelterId") int shelterId,
                                                      @PathVariable("page") int page,
                                                      @PathVariable("size") int size) {
        log.info("getAllActiveTakersByShelter -- shelterId: {} --page: {} --size: {}", shelterId, page, size);
        return takerService.getAllTakersByShelter(shelterId, page, size);
    }

    @GetMapping("/details/{shelterId}")
    public ShelterDto getSingleShelter(@PathVariable Long shelterId) throws ResourceNotFoundException {
        log.info("getSingleShelter -- shelterId: {}", shelterId);
        return shelterService.getSingleShelter(shelterId);
    }


    @PostMapping
    public ShelterDto createNewShelter(@RequestBody CreateShelterRequest createShelterRequest) {
        log.info("createNewShelter -- createShelterRequest: {}", createShelterRequest);
        return shelterService.addNewShelter(createShelterRequest);
    }

    @PutMapping(path = "/edit")
    public ShelterDto editShelter(@RequestBody ShelterDto shelterDto) {
        log.info("editShelter -- shelterId: {}", shelterDto.getId());
        return shelterService.editShelter(shelterDto);
    }

    @DeleteMapping(path = "/{shelterId}")
    public ShelterDto deleteShelter(@PathVariable Long shelterId) throws ResourceNotFoundException {
        log.info("deleteShelter -- shelterId: {}", shelterId);
        return shelterService.deleteShelter(shelterId);
    }
}
