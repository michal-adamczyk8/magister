package com.walkdog.common.mapper;

import com.walkdog.domain.taker.repository.entity.TakerEntity;
import com.walkdog.domain.taker.service.dto.TakerDto;
import org.modelmapper.PropertyMap;

public class TakerEntityPropertyMap extends PropertyMap<TakerEntity, TakerDto> {

    @Override
    protected void configure() {
        skip(source.getPets());
    }
}
