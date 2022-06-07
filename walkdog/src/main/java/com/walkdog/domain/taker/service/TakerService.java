package com.walkdog.domain.taker.service;

import com.walkdog.common.abstracts.BaseService;
import com.walkdog.common.codes.ErrorCodes;
import com.walkdog.common.enums.TakerStatus;
import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.shelter.service.ShelterService;
import com.walkdog.domain.taker.controller.request.CreateTakerRequest;
import com.walkdog.domain.taker.repository.TakerRepository;
import com.walkdog.domain.taker.repository.entity.TakerEntity;
import com.walkdog.domain.taker.service.dto.TakerDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TakerService extends BaseService<TakerDto, TakerEntity> {

    private final TakerRepository takerRepository;
    private final ShelterService shelterService;

    public Page<TakerDto> getAllActiveTakers(final int page, final int size) {
        return mapToDto(takerRepository.findAllByStatusOrderByCreatedAtDesc(TakerStatus.ACTIVE, PageRequest.of(page, size)));
    }

    public TakerDto getSingleTaker(final long takerId) throws ResourceNotFoundException {
        return mapToDto(takerRepository.findById(takerId).orElseThrow(
                () -> new ResourceNotFoundException(String.format(ErrorCodes.TAKER_NOT_FOUND_ERROR_CODE, takerId))));
    }

    public TakerDto deactivateTaker(final long takerId) throws ResourceNotFoundException {
        TakerDto takerDto = mapToDto(takerRepository.findById(takerId).orElseThrow(
                () -> new ResourceNotFoundException(String.format(ErrorCodes.TAKER_NOT_FOUND_ERROR_CODE, takerId))));
        takerDto.setStatus(TakerStatus.INACTIVE);
        takerDto.setModifiedBy("admin");
        takerDto.setModifiedAt(LocalDate.now());
        return mapToDto(takerRepository.save(mapToEntity(takerDto)));
    }

    public TakerDto editTaker(TakerDto takerDto) {
        return mapToDto(takerRepository.save(mapToEntity(takerDto)));
    }

    public TakerDto addNewTaker(final CreateTakerRequest createTakerRequest) throws ResourceNotFoundException {
        TakerDto newTaker = TakerDto.builder()
                .firstName(createTakerRequest.getFirstName())
                .lastName(createTakerRequest.getLastName())
                .email(createTakerRequest.getEmail())
                .phoneNumber(createTakerRequest.getPhoneNumber())
                .status(TakerStatus.ACTIVE)
                .shelter(shelterService.getActiveShelterById(createTakerRequest.getShelterId()))
                .createdBy("admim")
                .createdAt(LocalDate.now())
                .imageUrl(createTakerRequest.getImageUrl())
                .build();

        return mapToDto(takerRepository.save(mapToEntity(newTaker)));
    }

    public Page<TakerDto> getAllTakersByShelter(final int shelterId, final int page, int size) {
         return mapToDto(takerRepository.findAllByShelter_IdOrderByCreatedAtDesc(shelterId, PageRequest.of(page, size)));
    }


    public List<TakerDto> getAvailableTakersForPet(final long shelterId, final long petId) {
        return mapToDto(takerRepository.findAvailableUnassignedTakersForPet(shelterId, petId));
    }
}
