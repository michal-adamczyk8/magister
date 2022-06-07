package com.walkdog.domain.walks.repository;

import com.walkdog.domain.walks.repository.entity.WalkEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WalkRepository extends JpaRepository<WalkEntity, Long> {

    List<WalkEntity> findAllByPet_Id(long petId);
    List<WalkEntity> findAllByUser_Id(long petId);
    List<WalkEntity> findAllByPet_Shelter_Id(long shelterId);
}
