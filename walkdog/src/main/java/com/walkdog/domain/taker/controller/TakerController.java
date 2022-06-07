package com.walkdog.domain.taker.controller;

import com.walkdog.common.exceptions.ResourceNotFoundException;
import com.walkdog.domain.pet.service.PetService;
import com.walkdog.domain.pet.service.dto.PetDto;
import com.walkdog.domain.taker.controller.request.CreateTakerRequest;
import com.walkdog.domain.taker.service.TakerService;
import com.walkdog.domain.taker.service.dto.TakerDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/taker")
@RequiredArgsConstructor
@Slf4j
public class TakerController {

    private final TakerService takerService;
    private final PetService petService;

    @GetMapping(path = "/all")
    public Page<TakerDto> getAllActiveTakers(@RequestParam("page") int page, @RequestParam("size") int size) {
        log.info("getAllActiveTakers -- page: {}, size", page, size);
        return takerService.getAllActiveTakers(page, size);
    }

    @GetMapping(path = "/details/{takerId}")
    public ResponseEntity<TakerDto> getTakerDetails(@PathVariable(name = "takerId") long takerId) throws ResourceNotFoundException {
        log.info("getTakerDetails -- takerId: {}", takerId);
        return new ResponseEntity(takerService.getSingleTaker(takerId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TakerDto> createNewTaker(@RequestBody CreateTakerRequest createTakerRequest) throws ResourceNotFoundException {
        log.info("createNewTaker: {}", createTakerRequest);
        return new ResponseEntity(takerService.addNewTaker(createTakerRequest), HttpStatus.OK);
    }

    @DeleteMapping(path = "/{takerId}")
    public ResponseEntity<TakerDto> deactivateTaker(@PathVariable long takerId) throws ResourceNotFoundException {
        log.info("deactivateTaker -- takerId: {}", takerId);
        return new ResponseEntity(takerService.deactivateTaker(takerId), HttpStatus.OK);
    }

    @PutMapping(path = "/edit")
    public ResponseEntity<TakerDto> editTaker(@RequestBody TakerDto takerDto) {
        log.info("editTaker -- takerId: {}", takerDto.getId());
        return new ResponseEntity(takerService.editTaker(takerDto), HttpStatus.OK);
    }

    @GetMapping(path = "/pets/{takerId}/{page}/{size}")
    public Page<PetDto> getAllActivePetsByTaker(@PathVariable("takerId") int takerId,
                                                @PathVariable("page") int page,
                                                @PathVariable("size") int size) {
        log.info("getAllActivePetsByTaker -- takerId: {}", takerId);
        return petService.getAllPetsByTaker(takerId, page, size);
    }

    @GetMapping(path = "/available/{shelterId}/{petId}")
    public ResponseEntity<List<TakerDto>> getAvailableTakersForPet(@PathVariable long petId, @PathVariable long shelterId) {
        log.info("getAvailableTakersForPet -- petId: {}", petId);
        return new ResponseEntity(takerService.getAvailableTakersForPet(shelterId, petId), HttpStatus.OK);

    }
}
