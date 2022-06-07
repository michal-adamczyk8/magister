package com.walkdog.domain.user.controller;

import com.walkdog.common.exceptions.EmailAlreadyExistsException;
import com.walkdog.common.exceptions.EmailNotFoundException;
import com.walkdog.common.exceptions.UserNotFoundException;
import com.walkdog.common.exceptions.UsernameAlreadyExistsException;
import com.walkdog.common.http.HttpResponse;
import com.walkdog.domain.user.UserPrincipal;
import com.walkdog.domain.user.service.UserDto;
import com.walkdog.domain.user.service.UserService;
import com.walkdog.security.utility.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

import static com.walkdog.security.constants.SecurityConstants.JWT_TOKEN_HEADER;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody UserDto user) throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, MessagingException {
        UserDto newUser = userService.register(user);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody UserDto user) {
        authenticate(user.getUsername(), user.getPassword());
        UserDto loginUser = userService.findUserByUsername(user.getUsername());
        UserPrincipal userPrincipal = new UserPrincipal(loginUser);
        HttpHeaders jwtHeader = getJwtHeader(userPrincipal);
        return new ResponseEntity<>(loginUser, jwtHeader, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDto> addNewUser(@RequestParam(name = "firstName") String firstName,
                                              @RequestParam(name = "lastName") String lastName,
                                              @RequestParam(name = "username") String username,
                                              @RequestParam(name = "email") String email,
                                              @RequestParam(name = "role") String role,
                                              @RequestParam(name = "isActive") String isActive,
                                              @RequestParam(name = "isNonLocked") String isNonLocked)
            throws UserNotFoundException, MessagingException, EmailAlreadyExistsException, UsernameAlreadyExistsException, IOException {

        UserDto newUser = userService.addNewUser(firstName, lastName, username, email, role, Boolean.parseBoolean(isActive),
                Boolean.parseBoolean(isNonLocked));
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @PutMapping("/edit")
    public ResponseEntity<UserDto> updateUser(@RequestParam(name = "currentUsername") String currentUsername,
                                              @RequestParam(name = "firstName") String firstName,
                                              @RequestParam(name = "lastName") String lastName,
                                              @RequestParam(name = "username") String username,
                                              @RequestParam(name = "email") String email,
                                              @RequestParam(name = "role") String role,
                                              @RequestParam(name = "isActive") String isActive,
                                              @RequestParam(name = "isNonLocked") String isNonLocked)
            throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, IOException {

        UserDto updatedUser = userService.updateUser(currentUsername, firstName, lastName, username, email, role,
                Boolean.parseBoolean(isActive), Boolean.parseBoolean(isNonLocked));
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @GetMapping("/all/{page}/{size}")
    public ResponseEntity<List<UserDto>> getAllUsers(@PathVariable("page") int page,
                                                     @PathVariable("size") int size) {
        List<UserDto> users = userService.getUsers(page, size);
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PatchMapping("/reset-password")
    public ResponseEntity<HttpResponse> resetPassword(@RequestBody UserDto user)
            throws EmailNotFoundException, MessagingException {
        userService.resetPassword(user);
        return response(HttpStatus.OK, "The password was changed successfully.");
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<HttpResponse> deleteUser(@PathVariable(name = "id") long userId) {
        userService.deleteUser(userId);
        return response(HttpStatus.NO_CONTENT, "UserEntity deleted successfully");
    }

    private ResponseEntity<HttpResponse> response(HttpStatus httpStatus, String message) {
        return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus, httpStatus.getReasonPhrase().toUpperCase(), message), httpStatus);
    }

    private HttpHeaders getJwtHeader(UserPrincipal userPrincipal) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(JWT_TOKEN_HEADER, jwtTokenProvider.generateJwtToken(userPrincipal));
        return headers;
    }

    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                username, password
        ));
    }
}
