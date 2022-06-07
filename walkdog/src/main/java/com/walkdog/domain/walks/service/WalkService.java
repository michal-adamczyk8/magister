package com.walkdog.domain.walks.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.common.email.service.EmailService;
import com.walkdog.common.enums.WalkStatusEnum;
import com.walkdog.domain.pet.service.PetService;
import com.walkdog.domain.user.service.UserService;
import com.walkdog.domain.walks.controller.request.AddWalkRequest;
import com.walkdog.domain.walks.repository.WalkRepository;
import com.walkdog.domain.walks.repository.entity.WalkEntity;
import com.walkdog.domain.walks.service.dto.WalkDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class WalkService extends BaseService<WalkDto, WalkEntity> {

    private final UserService userService;
    private final PetService petService;
    private final WalkRepository walkRepository;
    private final EmailService emailService;

    public List<WalkDto> getWalksForPet(long petId) {
        return mapToDto(walkRepository.findAllByPet_Id(petId));
    }

    public List<WalkDto> getWalksForUser(long userId) {
        return mapToDto(walkRepository.findAllByUser_Id(userId));
    }

    public List<WalkDto> getWalksForShelter(long shelterId) {
        return mapToDto(walkRepository.findAllByPet_Shelter_Id(shelterId));
    }

    public WalkDto addWalk(final AddWalkRequest addWalkRequest) {
        WalkDto walk = WalkDto.builder()
                .user(userService.findById(addWalkRequest.getUserId()))
                .pet(petService.findById(addWalkRequest.getPetId()))
                .dateTime(addWalkRequest.getDateTime())
                .status(addWalkRequest.getStatus())
                .createdBy("admin")
                .createdAt(LocalDate.now())
                .build();
        return mapToDto(walkRepository.save(mapToEntity(walk)));
    }

    public WalkDto confirmWalk(long walkId) {
        WalkDto walkDto = mapToDto(walkRepository.findById(walkId).orElseThrow());
        walkDto.setStatus(WalkStatusEnum.CONFIRMED);
        walkDto.setModifiedAt(LocalDate.now());
        walkDto.setModifiedBy("admin");
        emailService.sendAcceptedWalkMessage(walkDto);
        return mapToDto(walkRepository.save(mapToEntity(walkDto)));
    }

    public WalkDto cancelWalk(long walkId) {
        WalkDto walkDto = mapToDto(walkRepository.findById(walkId).orElseThrow());
        walkDto.setStatus(WalkStatusEnum.CANCELED);
        walkDto.setModifiedAt(LocalDate.now());
        walkDto.setModifiedBy("admin");
        emailService.sendCancelledWalkMessage(walkDto);
        return mapToDto(walkRepository.save(mapToEntity(walkDto)));    }
}
