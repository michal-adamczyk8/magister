package com.walkdog.domain.pet.controller;


import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.pet.controller.request.CreatePetRequest;
import com.walkdog.domain.pet.service.dto.PetDto;
import com.walkdog.domain.pet.service.dto.PetService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pet")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class PetController {

    private final PetService petService;

    @GetMapping(path = "/all/{shelterId}")
    public List<PetDto> getAllShelterActivePets(@PathVariable Long shelterId) {
        return petService.getAllPetsByShelter(shelterId);
    }

    @PostMapping
    public PetDto createNewPet(@RequestBody CreatePetRequest createPetRequest) throws ResourceNotFoundException {
        return petService.addNewPet(createPetRequest);
    }

    @DeleteMapping(path = "/{id}")
    public PetDto deletePet(@PathVariable Long id) {
        return petService.deletePet(id);
    }
}
