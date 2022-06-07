package com.walkdog.domain.pet.repository;

import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import com.walkdog.domain.shelter.service.dto.ShelterDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<PetEntity, Long> {

    @Query(value = "SELECT * FROM pet p WHERE p.shelter_id = :shelterId AND p.status NOT IN (:notAllowedStatuses)",
            countQuery = "SELECT count(*) FROM pet p WHERE p.shelter_id = :shelterId AND p.status NOT IN (:notAllowedStatuses)",
            nativeQuery = true)
    Page<PetEntity> findAllByShelterIdAndStatusNotInOrderByCreatedAtDesc(@Param("shelterId") Long shelterId, @Param("notAllowedStatuses") List<String> notAllowedStatuses, Pageable pageable);


    @Query(value = "select * from pet p join taker_pets tp on tp.pets_id  = p.id where tp.takers_id = :takerId AND p.status NOT IN (:notAllowedStatuses)",
            countQuery = "select count(*) from pet p join taker_pets tp on tp.pets_id  = p.id where tp.takers_id = :takerId AND p.status NOT IN (:notAllowedStatuses)",
            nativeQuery = true)
    Page<PetEntity> findAllByTakerIdAndStatusNotInOrderByCreatedAtDesc(@Param("takerId") Long shelterId, @Param("notAllowedStatuses") List<String> notAllowedStatuses, Pageable pageable);

    Page<PetEntity> findAllByStatusNotInOrderByCreatedAtDesc(List<PetStatusEnum> notAllowedStatuses, Pageable pageable);


}

