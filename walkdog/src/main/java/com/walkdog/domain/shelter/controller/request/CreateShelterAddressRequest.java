package com.walkdog.domain.shelter.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateShelterAddressRequest {
    private String streetName;
    private String houseNumber;
    private String flatNumber;
    private String city;
    private String zipCode;
}
