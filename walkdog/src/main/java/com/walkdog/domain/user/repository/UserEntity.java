package com.walkdog.domain.user.repository;

import com.walkdog.common.enums.UserRole;
import com.walkdog.common.enums.converters.UserRoleAttributeConverter;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import com.walkdog.domain.walks.repository.entity.WalkEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "app_user")
public class UserEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name = "user_id")
    private String userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "user_name")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    @Column(name = "profile_image_url")
    private String profileImageUrl;

    @Column(name = "last_login_date")
    private LocalDate lastLoginDate;

    @Column(name = "last_login_date_display")
    private LocalDate lastLoginDateDisplay;

    @Column(name = "joined_date")
    private LocalDate joinedDate;

    @Column(name = "role")
    @Convert(converter = UserRoleAttributeConverter.class)
    private UserRole role;

    @OneToMany(mappedBy = "user")
    private Set<WalkEntity> walks;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "shelter_id")
    private ShelterEntity shelter;

    @Column(name = "is_active")
    private boolean isActive;

    @Column(name = "is_not_locked")
    private boolean isNotLocked;

}
