package com.walkdog.domain.taker.service.dto;

import com.walkdog.common.enums.TakerStatus;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TakerDto {
    private Long id;
    private String firstName;
    private String lastName;
    private TakerStatus status;
    private String email;
    private String phoneNumber;
    private String imageUrl;
    private ShelterDto shelter;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;

}
