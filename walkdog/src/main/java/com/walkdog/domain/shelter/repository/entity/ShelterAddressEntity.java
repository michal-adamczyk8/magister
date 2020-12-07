package com.walkdog.domain.shelter.repository.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name = "SHELTER")
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "shelter_address")
@Data
public class ShelterAddressEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_shelter_address_id")
    @SequenceGenerator(name="sequence_shelter_address_id", sequenceName = "sequence_shelter_address_id", allocationSize = 1)
    @Column(name = "shelter_address_id")
    private Long shelterAddressId;

    @Column(name = "street_name")
    private String streetName;

    @Column(name = "house_number")
    private String houseNumber;

    @Column(name = "flat_number")
    private String flatNumber;

    @Column(name = "city")
    private String city;

    @Column(name = "zip_code")
    private String zipCode;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "modified_at")
    private LocalDate modifiedAt;
}
