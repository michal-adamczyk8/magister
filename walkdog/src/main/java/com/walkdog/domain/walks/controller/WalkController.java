package com.walkdog.domain.walks.controller;

import com.walkdog.domain.walks.controller.request.AddWalkRequest;
import com.walkdog.domain.walks.service.WalkService;
import com.walkdog.domain.walks.service.dto.WalkDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/walk")
@RequiredArgsConstructor
@Slf4j
public class WalkController {
    private final WalkService walkService;

    @GetMapping("/{petId}")
    public List<WalkDto> getWalksForPet(final @PathVariable long petId) {

        log.info("getWalksForPet -- petId: {}", petId);
        return walkService.getWalksForPet(petId);
    }

    @GetMapping("/user/{userId}")
    public List<WalkDto> getWalksForUser(final @PathVariable long userId) {
        log.info("getWalksForUser -- userId: {}", userId);
        return walkService.getWalksForUser(userId);
    }

    @GetMapping("/shelter/{shelterId}")
    public List<WalkDto> getWalksForShelter(final @PathVariable long shelterId) {
        log.info("getWalksForShelter -- shelterId: {}", shelterId);
        return walkService.getWalksForShelter(shelterId);
    }

    @PostMapping
    public ResponseEntity<WalkDto> addWalk(final @RequestBody AddWalkRequest addWalkRequest) {
        log.info("addWalk: {}", addWalkRequest);
        return new ResponseEntity(walkService.addWalk(addWalkRequest), HttpStatus.OK);
    }

    @PatchMapping(path = "{walkId}/confirm")
    public ResponseEntity<WalkDto> confirmWalk(@PathVariable long walkId) {
        log.info("confirmWalk -- walkId: {}", walkId);
        return new ResponseEntity(walkService.confirmWalk(walkId), HttpStatus.OK);
    }


    @PatchMapping(path = "{walkId}/cancel")
    public ResponseEntity<WalkDto> cancelWalk(@PathVariable long walkId) {
        log.info("cancelWalk -- walkId: {}", walkId);
        return new ResponseEntity(walkService.cancelWalk(walkId), HttpStatus.OK);
    }
}
