package com.walkdog.security.constants;

public class Authorities {
    public static final String[] USER_AUTHORITIES = {"user:read"};
    public static final String[] MANAGER_AUTHORITIES = {"user:read", "user:update"};
    public static final String[] SUPER_USER_AUTHORITIES = {"user:read", "user:create", "user:update", "user:delete"};

}
