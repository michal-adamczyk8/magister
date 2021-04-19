package com.walkdog.domain.shelter.repository.entity;

import com.walkdog.common.enums.ShelterStatusEnum;
import com.walkdog.common.enums.converters.ShelterStatusAttributeConverter;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity(name = "shelter")
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "shelter")
@Data
public class ShelterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_shelter_id")
    @SequenceGenerator(name="sequence_shelter_id", sequenceName = "sequence_shelter_id", allocationSize = 1)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "nip")
    private String nip;

    @Column(name = "regon")
    private String regon;

    @Column(name = "krs")
    private String krs;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private ShelterAddressEntity address;

    @Column(name = "description")
    private String description;

    @Column(name = "image_path")
    private String imagePath;

    @Column(name = "website_url")
    private String websiteUrl;

    @Column(name = "facebook_url")
    private String facebookUrl;

    @Column(name = "instagram_url")
    private String instagramUrl;

    @Column(name = "twitter_url")
    private String twitterUrl;

    @Column(name = "bank_account")
    private String bankAccount;

    @Column(name = "swift_code")
    private String swiftCode;

    @Column(name = "opening_time")
    private String openingTime;

    @Column(name = "status")
    @Convert(converter = ShelterStatusAttributeConverter.class)
    private ShelterStatusEnum status;

    @OneToMany(mappedBy = "shelter" )
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
