package com.walkdog.domain.taker.repository;

import com.walkdog.common.enums.TakerStatus;
import com.walkdog.domain.taker.repository.entity.TakerEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TakerRepository extends JpaRepository<TakerEntity, Long> {

    Page<TakerEntity> findAllByStatusOrderByCreatedAtDesc(TakerStatus takerStatus, Pageable pageable);

    @Query(value = "select * from taker t " +
                   "where t.shelter_id = :shelterId " +
                   "and t.id not in " +
                   "(select pt.taker_id from pet_taker pt left join taker t2 on pt.taker_id = t2.id where pt.pet_id = :petId)",
            nativeQuery = true)
    List<TakerEntity> findAvailableUnassignedTakersForPet(@Param("shelterId") long shelterId, @Param("petId") long petId);

    Page<TakerEntity> findAllByShelter_IdOrderByCreatedAtDesc(long shelterId, Pageable pageable);
}
