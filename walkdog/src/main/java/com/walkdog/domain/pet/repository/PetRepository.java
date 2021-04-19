package com.walkdog.domain.pet.repository;

import com.walkdog.common.enums.PetStatusEnum;
import com.walkdog.domain.pet.repository.entity.PetEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PetRepository extends JpaRepository<PetEntity, Long> {

    @Query(value = "SELECT * FROM pet p WHERE p.shelter_id = :shelterId AND p.status NOT IN (:notAllowedStatuses)",
            nativeQuery = true)
    List<PetEntity> findAllByShelterIdAndStatusNotIn(@Param("shelterId") Long shelterId, @Param("notAllowedStatuses") List<PetStatusEnum> notAllowedStatuses);
}
