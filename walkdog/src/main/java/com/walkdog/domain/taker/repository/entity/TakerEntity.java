package com.walkdog.domain.taker.repository.entity;

import com.walkdog.common.enums.TakerStatus;
import com.walkdog.common.enums.converters.TakerStatusConverter;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity(name = "taker")
@AllArgsConstructor
@NoArgsConstructor
@Table
@Getter
@Setter
public class TakerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "status")
    @Convert(converter = TakerStatusConverter.class)
    private TakerStatus status;

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "image_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "shelter_id")
    private ShelterEntity shelter;

    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(
//            name = "pet_taker",
//            joinColumns = @JoinColumn(name = "taker_id"),
//            inverseJoinColumns = @JoinColumn(name = "pet_id")
//    )
    private Set<PetEntity> pets;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "modified_at")
    private LocalDate modifiedAt;

}
