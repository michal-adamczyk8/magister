package com.walkdog.domain.shelter.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CreateShelterRequest {
    private String shelterName;
    private String phoneNumber;
    private String email;
    private String nip;
    private String regon;
    private String streetName;
    private String houseNumber;
    private String flatNumber;
    private String city;
    private String zipCode;
    private String description;
    private String imagePath;
}
