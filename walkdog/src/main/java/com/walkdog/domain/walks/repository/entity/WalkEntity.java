package com.walkdog.domain.walks.repository.entity;

import com.walkdog.common.enums.WalkStatusEnum;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.user.repository.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity(name = "walk")
@AllArgsConstructor
@NoArgsConstructor
@Table
@Getter
@Setter
public class WalkEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name = "date_time")
    private LocalDateTime dateTime;

    @JoinColumn(name = "pet_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private PetEntity pet;

    @JoinColumn(name = "user_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private UserEntity user;

    @Column(name = "status")
    private WalkStatusEnum status;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "modified_at")
    private LocalDate modifiedAt;
}
