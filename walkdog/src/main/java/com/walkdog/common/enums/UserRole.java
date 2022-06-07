package com.walkdog.common.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import static com.walkdog.security.constants.Authorities.*;

@AllArgsConstructor
@Getter
public enum UserRole {
    ROLE_USER(USER_AUTHORITIES),
    ROLE_MANAGER(MANAGER_AUTHORITIES),
    ROLE_SUPER_ADMIN(SUPER_USER_AUTHORITIES);

    private String[] authorities;
}
