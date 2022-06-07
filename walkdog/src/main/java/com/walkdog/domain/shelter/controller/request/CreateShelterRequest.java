package com.walkdog.domain.shelter.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateShelterRequest {
    private String name;
    private String phoneNumber;
    private String email;
    private String nip;
    private String regon;
    private String krs;
    private CreateShelterAddressRequest address;
    private String description;
    private String imagePath;
    private String websiteUrl;
    private String facebookUrl;
    private String twitterUrl;
    private String instagramUrl;
    private String bankAccount;
    private String swiftCode;
    private String openingTime;
}
