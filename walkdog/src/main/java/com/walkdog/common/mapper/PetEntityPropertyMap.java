package com.walkdog.common.mapper;

import com.walkdog.domain.pet.repository.entity.PetEntity;
import com.walkdog.domain.pet.service.dto.PetDto;
import org.modelmapper.PropertyMap;

public class PetEntityPropertyMap extends PropertyMap<PetEntity, PetDto> {
    @Override
    protected void configure() {
        map(source.getTakers()).setTakers(null);
        map(source.getShelter()).setShelterDto(null);
    }
}
