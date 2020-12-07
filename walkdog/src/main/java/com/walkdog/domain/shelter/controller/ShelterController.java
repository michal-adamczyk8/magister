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
        return Arrays.asList(
                ShelterDto.builder()
                        .shelterId(1L)
                        .shelterName("Schronisko Na Paluchu")
                        .nip("522-25-84-702").regon("017189145")
                        .email("info@napaluchu.waw.pl")
                        .phoneNumber("22 868-06-34")
                        .address(
                                ShelterAddressDto.builder()
                                        .city("Warszawa")
                                        .streetName("ul. Paluch")
                                        .houseNumber("2")
                                        .zipCode("01-910")
                                        .build()
                        )
                        .imagePath("https://napaluchu.waw.pl/wp-content/themes/paluch/images/logo-1.png")
                        .build(),

                ShelterDto.builder()
                        .shelterId(1L)
                        .shelterName("Schronisko w Dyminach")
                        .nip("522-25-84-702").regon("017189145")
                        .email("schronisko.dyminy@wp.pl")
                        .phoneNumber("41 361 67 24")
                        .address(
                                ShelterAddressDto.builder()
                                        .city("Warszawa")
                                        .streetName("ul. Ściegiennego")
                                        .houseNumber("203")
                                        .zipCode("01-910")
                                        .build()
                        )
                        .imagePath("https://lh3.googleusercontent.com/proxy/ertnpyKhUcfTRAKPBc0I6-gu9bBo7oOD5zNj3KwLTND0FvJWlxTFnvJGn-ckCohKUEZGcIbl10wBErJ1Nkx9ebjuZty6nz1XMcuXRlhfUWdGOseud5OxMZktE9PGnNU")
                        .build());


    }

    @PostMapping
    public String createNewShelter(@RequestBody CreateShelterRequest request) {
        System.out.println(request);
        ShelterDto shelterDto = shelterService.addNewShelter(request);
        return shelterDto.toString();
    }
}
