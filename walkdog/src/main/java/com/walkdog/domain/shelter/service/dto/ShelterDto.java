package com.walkdog.domain.shelter.service.dto;

import com.walkdog.common.enums.ShelterStatusEnum;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.pet.service.dto.PetDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShelterDto {
    private Long id;
    private String name;
    private String phoneNumber;
    private String email;
    private String nip;
    private String regon;
    private String krs;
    private ShelterAddressDto address;
    private String description;
    private String imagePath;
    private String websiteUrl;
    private String facebookUrl;
    private String instagramUrl;
    private String twitterUrl;
    private String bankAccount;
    private String swiftCode;
    private String openingTime;
    private ShelterStatusEnum status;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;
}
