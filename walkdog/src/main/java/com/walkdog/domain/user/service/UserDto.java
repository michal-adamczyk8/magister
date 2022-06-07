package com.walkdog.domain.user.service;

import com.walkdog.common.enums.UserRole;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {

    private Long id;
    private String userId;
    private String firstName;
    private String lastName;
    private String username;
    private String password;
    private String email;
    private String profileImageUrl;
    private LocalDate lastLoginDate;
    private LocalDate lastLoginDateDisplay;
    private LocalDate joinedDate;
    private UserRole role;
    private Long shelterId;
    private boolean isActive;
    private boolean isNotLocked;
}
