package com.walkdog.security.constants;

public class SecurityConstants {
    public static final long EXPIRATION_TIME = 432_000_000;
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String JWT_TOKEN_HEADER = "JWT_Token";
    public static final String TOKEN_CANNOT_BE_VERIFIED = "Token cannot be verified";
    public static final String GET_ARRAYS_ADMINISTRATION = "UserEntity Management Portal";
    public static final String AUTHORITIES = "authorities";
    public static final String FORBIDDEN_MESSAGE = "You need to log in to access this page";
    public static final String ACCESS_DENIED = "You do not have permission to access this page";
    public static final String OPTIONS_HTTP_METHOD = "OPTIONS";
    public static final String[] PUBLIC_URLS = {
            "/shelter/all",
            "/shelter/details/**",
            "/shelter/pets/**",
            "/shelter/takers/**",
            "/pet/all/**",
            "/pet/details/**",
            "/taker/all/**",
            "/taker/pets/**",
            "/taker/details/**",
            "/taker/pets/**",
            "/user/register",
            "/user/login",
            "/user/reset-password",
    };
}