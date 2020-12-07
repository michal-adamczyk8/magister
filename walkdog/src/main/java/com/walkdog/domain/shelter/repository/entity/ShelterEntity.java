package com.walkdog.domain.shelter.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name = "shelter")
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "shelter")
@Data
public class ShelterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_shelter_id")
    @SequenceGenerator(name="sequence_shelter_id", sequenceName = "sequence_shelter_id", allocationSize = 1)
    @Column(name = "shelter_id")
    private Long shelterId;

    @Column(name = "shelter_name")
    private String shelterName;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "nip")
    private String nip;

    @Column(name = "regon")
    private String regon;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private ShelterAddressEntity address;

    @Column(name = "description")
    private String description;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "modified_at")
    private LocalDate modifiedAt;
}
