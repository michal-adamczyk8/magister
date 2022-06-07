package com.walkdog.domain.shelter.repository;

import com.walkdog.common.enums.ShelterStatusEnum;
import com.walkdog.domain.shelter.repository.entity.ShelterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelterRepository extends JpaRepository<ShelterEntity, Long> {
    List<ShelterEntity> findAllByStatusOrderByCreatedAtDesc(ShelterStatusEnum statusEnum);

}
