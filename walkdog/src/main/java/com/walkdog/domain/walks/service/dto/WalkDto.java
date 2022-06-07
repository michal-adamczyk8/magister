package com.walkdog.domain.walks.service.dto;


import com.walkdog.common.enums.WalkStatusEnum;
import com.walkdog.domain.pet.service.dto.PetDto;
import com.walkdog.domain.user.service.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class WalkDto {
    private Long id;
    private LocalDateTime dateTime;
    private PetDto pet;
    private UserDto user;
    private WalkStatusEnum status;
    private String createdBy;
    private LocalDate createdAt;
    private String modifiedBy;
    private LocalDate modifiedAt;
}
