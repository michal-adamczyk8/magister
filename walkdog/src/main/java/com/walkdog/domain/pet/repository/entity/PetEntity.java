package com.walkdog.domain.pet.repository.entity;

import com.walkdog.common.enums.PetSexEnum;
import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.common.enums.PetTypeEnum;
import com.walkdog.common.enums.converters.PetSexAttributeConverter;
import com.walkdog.common.enums.converters.PetStatusAttributeConverter;
import com.walkdog.common.enums.converters.PetTypeAttributeConverter;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import com.walkdog.domain.taker.repository.entity.TakerEntity;
import com.walkdog.domain.walks.repository.entity.WalkEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Entity(name = "pet")
@AllArgsConstructor
@NoArgsConstructor
@Table
@Getter
@Setter
public class PetEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name = "type")
    @Convert(converter = PetTypeAttributeConverter.class)
    private PetTypeEnum type;

    @Column(name = "name")
    private String name;

    @Column(name = "sex")
    @Convert(converter = PetSexAttributeConverter.class)
    private PetSexEnum sex;

    @Column(name = "race_type")
    private String raceType;

    @Column(name = "birth_year")
    private Integer birthYear;

    @Column(name = "birth_month")
    private Integer birthMonth;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "admittance_date")
    private Date admittanceDate;

    @Column(name = "description")
    private String description;

    @Column(name = "found_place")
    private String foundPlace;

    @Column(name = "image_url")
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "shelter_id")
    private ShelterEntity shelter;

    @ManyToMany(mappedBy = "pets")
    private Set<TakerEntity> takers;

    @OneToMany(mappedBy = "pet")
    private Set<WalkEntity> walks;

    @Column(name = "status")
    @Convert(converter = PetStatusAttributeConverter.class)
    private PetStatusEnum status;

    @Column(name = "created_by")
    private String createdBy;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "modified_at")
    private LocalDate modifiedAt;
}
