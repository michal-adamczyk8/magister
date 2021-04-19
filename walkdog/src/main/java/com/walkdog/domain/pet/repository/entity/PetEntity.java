package com.walkdog.domain.pet.repository.entity;

import com.walkdog.common.enums.PetSexEnum;
import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.common.enums.PetTypeEnum;
import com.walkdog.common.enums.converters.PetSexAttributeConverter;
import com.walkdog.common.enums.converters.PetStatusAttributeConverter;
import com.walkdog.common.enums.converters.PetTypeAttributeConverter;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity(name = "pet")
@AllArgsConstructor
@NoArgsConstructor
@Table
@Data
public class PetEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_pet_id")
    @SequenceGenerator(name="sequence_pet_id", sequenceName = "sequence_pet_id", allocationSize = 1)
    @Column(name = "id")
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
    private LocalDate admittanceDate;

    @Column(name = "description")
    private String description;

    @Column(name = "found_place")
    private String foundPlace;

    @ManyToOne
    @JoinColumn(name = "shelter_id")
    private ShelterEntity shelter;

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
