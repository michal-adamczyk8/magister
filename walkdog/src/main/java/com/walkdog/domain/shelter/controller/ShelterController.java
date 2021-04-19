package com.walkdog.domain.shelter.controller;

import com.walkdog.domain.shelter.controller.request.CreateShelterRequest;
import com.walkdog.domain.shelter.service.ShelterService;
import com.walkdog.domain.shelter.service.dto.ShelterAddressDto;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/shelter")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ShelterController {

    private final ShelterService shelterService;

    @GetMapping(path = "/all")
    public List<ShelterDto> getAllActiveShelters() {
        return shelterService.getAllShelters();
    }

    @PostMapping
    public String createNewShelter(@RequestBody CreateShelterRequest createShelterRequest) {
        ShelterDto shelterDto = shelterService.addNewShelter(createShelterRequest);
        //TODO: sprawdzić czemu dałem toString
        return shelterDto.toString();
    }

    @DeleteMapping(path = "/{id}")
    public String deleteShelter(@PathVariable Long id) {
        return shelterService.deleteShelter(id).toString();
    }
}
