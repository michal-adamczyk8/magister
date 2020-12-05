package com.walkdog.domain.shelter.controller;

import com.walkdog.domain.shelter.controller.request.CreateShelterRequest;
import com.walkdog.domain.shelter.service.ShelterService;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/shelter")
@RequiredArgsConstructor
public class ShelterController {

    private final ShelterService shelterService;

    @PostMapping("/")
    public String createNewShelter(@RequestBody CreateShelterRequest request) {
        ShelterDto shelterDto = shelterService.addNewShelter(request);
        return "Eloooooo:" + shelterDto.toString();
    }
}
