package com.walkdog.domain.user.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.common.email.service.EmailService;
import com.walkdog.common.enums.UserRole;
import com.walkdog.common.exceptions.EmailAlreadyExistsException;
import com.walkdog.common.exceptions.EmailNotFoundException;
import com.walkdog.common.exceptions.UserNotFoundException;
import com.walkdog.common.exceptions.UsernameAlreadyExistsException;
import com.walkdog.domain.user.repository.UserEntity;
import com.walkdog.domain.user.UserPrincipal;
import com.walkdog.domain.user.repository.UserRepository;
import com.walkdog.security.utility.LoginAttemptService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import static com.walkdog.common.constants.FileConstant.*;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

@Slf4j
@Service
@Transactional
@Qualifier("UserDetailsService")
public class UserServiceImpl extends BaseService<UserDto, UserEntity> implements UserService, UserDetailsService {
    private static final String NO_USERNAME_FOUND_MSG = "No user found by username: %S";
    private static final String USERNAME_ALREADY_EXISTS_MSG = "Username: %s already exists";
    private static final String EMAIL_ALREADY_EXISTS_MSG = "Email: %s already exists";
    private static final String NO_USERNAME_FOUND_BY_EMAIL = "No user was found for email: %s";
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final LoginAttemptService loginAttemptService;
    private final EmailService emailService;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder,
                           LoginAttemptService loginAttemptService, EmailService emailService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.loginAttemptService = loginAttemptService;
        this.emailService = emailService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDto user = mapToDto(userRepository.findByUsername(username));
        if (user == null) {
            log.error(String.format(NO_USERNAME_FOUND_MSG, username));
            throw new UsernameNotFoundException(String.format(NO_USERNAME_FOUND_MSG, username));
        }
        validateLoginAttempt(user);
        user.setLastLoginDateDisplay(user.getLastLoginDate());
        user.setLastLoginDate(LocalDate.now());
        userRepository.save(mapToEntity(user));
        log.info("Returning user found by username: " + username);
        return new UserPrincipal(user);
    }


    @Override
    public UserDto register(UserDto userDto)
            throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, MessagingException {
        validateNewUsernameAndEmail(StringUtils.EMPTY, userDto.getUsername(), userDto.getEmail());
        UserDto user = new UserDto();
        user.setUserId(generateUserId());
        user.setUsername(userDto.getUsername());
        user.setPassword(encode(userDto.getPassword()));
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setJoinedDate(LocalDate.now());
        user.setActive(true);
        user.setNotLocked(true);
        user.setRole(UserRole.ROLE_USER);
        user.setProfileImageUrl(getTemporaryImageUrl(userDto.getUsername()));
        emailService.sendWelcomeMessage(user);
        return mapToDto(userRepository.save(mapToEntity(user)));
    }

    @Override
    public UserDto addNewUser(String firstName, String lastName, String username, String email, String role,
                              boolean isNotLocked, boolean isActive)
            throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, MessagingException, IOException {
        validateNewUsernameAndEmail(StringUtils.EMPTY, username, email);
        String password = generatePassword();
        UserDto user = new UserDto();
        user.setUserId(generateUserId());
        user.setUsername(username);
        user.setPassword(encode(password));
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setJoinedDate(LocalDate.now());
        user.setActive(true);
        user.setNotLocked(true);
        user.setRole(UserRole.valueOf(role.toUpperCase()));
        user.setProfileImageUrl(getTemporaryImageUrl(username));
        emailService.sendWelcomeMessageForAddedUser(user, password);
        log.info("Saving user with password: " + password);
        return mapToDto(userRepository.save(mapToEntity(user)));
    }

    @Override
    public UserDto updateUser(String currentUsername, String newFirstName, String newLastName, String newUsername,
                              String newEmail, String role, boolean isNotLocked, boolean isActive)
            throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, IOException {
        UserDto currentUser = validateNewUsernameAndEmail(currentUsername, newUsername, newEmail);
        currentUser.setUsername(newUsername);
        currentUser.setFirstName(newFirstName);
        currentUser.setLastName(newLastName);
        currentUser.setEmail(newEmail);
        currentUser.setActive(isActive);
        currentUser.setNotLocked(isNotLocked);
        currentUser.setRole(UserRole.valueOf(role.toUpperCase()));
        return mapToDto(userRepository.save(mapToEntity(currentUser)));
    }

    @Override
    public void deleteUser(long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void resetPassword(UserDto userDto) throws EmailNotFoundException {
        UserEntity user = userRepository.findByUsername(userDto.getUsername());
        if(null == user) {
            throw new EmailNotFoundException(String.format(NO_USERNAME_FOUND_MSG, userDto.getUsername()));
        }
        user.setPassword(encode(userDto.getPassword()));
        userRepository.save(user);
    }

    @Override
    public UserDto updateProfileImage(String username, MultipartFile profileImage) throws UserNotFoundException, EmailAlreadyExistsException, UsernameAlreadyExistsException, IOException {
        UserDto user = validateNewUsernameAndEmail(username, null, null);
        saveProfileImage(user, profileImage);
        return user;
    }

    @Override
    public List<UserDto> getUsers(int page, int size) {
        Page<UserEntity> allUser = userRepository.findAll(PageRequest.of(page, size));
        return allUser.stream().map(userEntity -> {
            UserDto userDto = mapToDto(userEntity);
            userDto.setShelterId(userEntity.getShelter().getId());
            return userDto;
        }).collect(Collectors.toList());
    }

    @Override
    public UserDto findUserByUsername(String username) {
        return mapToDto(userRepository.findByUsername(username));
    }

    @Override
    public UserDto findUserByEmail(String email) {
        return mapToDto(userRepository.findByEmail(email));
    }


    @Override
    public UserDto findById(long id) {
        return mapToDto(userRepository.findById(id).orElseThrow());
    }

    private void saveProfileImage(UserDto user, MultipartFile profileImage) throws IOException {
        if (profileImage != null) {
            Path userFolder = Paths.get(USER_FOLDER + user.getUsername()).toAbsolutePath().normalize();
            if (!Files.exists(userFolder)) {
                Files.createDirectories(userFolder);
                log.info(String.format(DIRECTORY_CREATED, userFolder));
            }
            Files.deleteIfExists(Paths.get(userFolder + user.getUsername()+ DOT + JPG_EXTENSION));
            Files.copy(profileImage.getInputStream(), userFolder.resolve(user.getUsername() + DOT + JPG_EXTENSION), REPLACE_EXISTING);
            user.setProfileImageUrl(setProfileImageUrl(user.getUsername()));
            userRepository.save(mapToEntity(user));
            log.info(FILE_SAVED_IN_FILE_SYSTEM + profileImage.getOriginalFilename() + userFolder);
        }
    }

    private String setProfileImageUrl(String username) {
        return ServletUriComponentsBuilder.fromCurrentContextPath().path(USER_IMAGE_PATH + username + FORWARD_SLASH + username + DOT + JPG_EXTENSION).toUriString();
    }

    private String getTemporaryImageUrl(String username) {
        return ServletUriComponentsBuilder.fromCurrentContextPath().path(DEFAULT_USER_IMAGE_PATH + username).toUriString();
    }

    private String generateUserId() {
        return RandomStringUtils.randomNumeric(10);
    }

    private String encode(String password) {
        return passwordEncoder.encode(password);
    }

    private String generatePassword() {
        return RandomStringUtils.randomAlphanumeric(10);
    }

    private UserDto validateNewUsernameAndEmail(String currentUsername, String newUsername, String newEmail) throws UserNotFoundException, UsernameAlreadyExistsException, EmailAlreadyExistsException {
        UserDto userByNewUsername = mapToDto(userRepository.findByUsername(newUsername));
        UserDto userByNewEmail = mapToDto(userRepository.findByEmail(newEmail));
        if (StringUtils.isNotBlank(currentUsername)) {
            UserDto currentUser = mapToDto(userRepository.findByUsername(currentUsername));
            if (null == currentUser) {
                throw new UserNotFoundException(String.format(NO_USERNAME_FOUND_MSG, currentUsername));
            }
            if (null != userByNewUsername && !currentUser.getId().equals(userByNewUsername.getId())) {
                throw new UsernameAlreadyExistsException(String.format(USERNAME_ALREADY_EXISTS_MSG, newUsername));
            }
            if (null != userByNewEmail && !currentUser.getId().equals(userByNewEmail.getId())) {
                throw new EmailAlreadyExistsException(String.format(EMAIL_ALREADY_EXISTS_MSG, newEmail));
            }
            return currentUser;
        } else {
            if (userByNewUsername != null) {
                throw new UsernameAlreadyExistsException(String.format(USERNAME_ALREADY_EXISTS_MSG, newUsername));
            }
            if (null != userByNewEmail) {
                throw new EmailAlreadyExistsException(String.format(EMAIL_ALREADY_EXISTS_MSG, newEmail));
            }
        }
        return null;
    }

    private void validateLoginAttempt(UserDto user) {
        if (user.isNotLocked()) {
            if (loginAttemptService.hasExceededMaxAttempts(user.getUsername())) {
                user.setNotLocked(false);
            } else {
                user.setNotLocked(true);
            }
        } else {
            loginAttemptService.evictUserFromLoginAttemptCache(user.getUsername());
        }
    }

}

