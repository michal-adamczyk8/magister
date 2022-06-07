package com.walkdog.domain.user.service;

import com.walkdog.common.exceptions.EmailAlreadyExistsException;
import com.walkdog.common.exceptions.EmailNotFoundException;
import com.walkdog.common.exceptions.UserNotFoundException;
import com.walkdog.common.exceptions.UsernameAlreadyExistsException;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

public interface UserService {
    UserDto register(UserDto userDto) throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, MessagingException;

    List<UserDto> getUsers(int page, int size);

    UserDto findUserByUsername(String username);

    UserDto findUserByEmail(String email);

    UserDto addNewUser(String firstName, String lastName, String username, String email, String role, boolean isNotLocked, boolean isActive) throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, MessagingException, IOException;

    UserDto updateUser(String currentUsername, String newFirstName, String newLastName, String newUsername, String newEmail, String role, boolean isNotLocked, boolean isActive) throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, IOException;

    void deleteUser(long id);

    void resetPassword(UserDto userDto) throws EmailNotFoundException, MessagingException;

    UserDto updateProfileImage(String username, MultipartFile profileImage) throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, IOException;

    UserDto findById(long id);
}
