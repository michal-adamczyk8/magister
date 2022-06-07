package com.walkdog.domain.pet.controller;


import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.pet.controller.request.CreatePetRequest;
import com.walkdog.domain.pet.service.PetService;
import com.walkdog.domain.pet.service.dto.PetDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pet")
@RequiredArgsConstructor
@Slf4j
public class PetController {

    private final PetService petService;

    @GetMapping(path = "/all")
    public Page<PetDto> getAllActivePets(@RequestParam("page") int page, @RequestParam("size") int size) {
        log.info("getAllActivePets -- page: {} --size: {}", page, size);
        return petService.getAllActivePets(page, size);
    }

    @GetMapping(path = "/details/{petId}")
    public PetDto getPetDetails(@PathVariable(name = "petId") long petId) throws ResourceNotFoundException {
        log.info("getPetDetails -- petId: {}", petId);
        return petService.getSinglePet(petId);
    }

    @PostMapping
    public PetDto createNewPet(@RequestBody CreatePetRequest createPetRequest) throws ResourceNotFoundException {
        log.info("createNewPet -- createPetRequest: {}", createPetRequest);
        return petService.addNewPet(createPetRequest);
    }

    @DeleteMapping(path = "/{petId}")
    public PetDto deletePet(@PathVariable Long petId) throws ResourceNotFoundException {
        log.info("deletePet -- petId: {}", petId);
        return petService.deletePet(petId);
    }

    @PutMapping(path = "/edit")
    public PetDto editPet(@RequestBody PetDto petDto) {
        log.info("editPet -- petId: {}", petDto.getId());
        return petService.editPet(petDto);
    }
}
