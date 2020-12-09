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
    public List<ShelterDto> getAllShelters() {
        return shelterService.getAllShelters();
    }

    @PostMapping
    public String createNewShelter(@RequestBody CreateShelterRequest request) {
        System.out.println(request);
        ShelterDto shelterDto = shelterService.addNewShelter(request);
        return shelterDto.toString();
    }

    @GetMapping("/{shelterName}")
    public String getShelterByName(@PathVariable String shelterName) {
        return shelterService.getShelterByName(shelterName).toString();
    }
}
