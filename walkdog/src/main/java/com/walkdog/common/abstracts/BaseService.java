package com.walkdog.common.abstracts;

import com.walkdog.common.mapper.PetEntityPropertyMap;
import com.walkdog.common.mapper.TakerEntityPropertyMap;
import com.walkdog.domain.walks.controller.request.AddWalkRequest;
import com.walkdog.domain.walks.service.dto.WalkDto;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Slice;
import org.springframework.http.ResponseEntity;

import java.lang.reflect.ParameterizedType;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public abstract class BaseService<Dto, Entity> {
    private Class<Dto> genericClassDto = null;
    private Class<Entity> genericClassEntity = null;
    protected ModelMapper mapper = null;

    protected Page<Dto> mapToDto(Page<Entity> entities) {
        return entities.map(this::mapToDto);
    }

    protected Slice<Dto> mapToDto(Slice<Entity> entities) {
        return entities.map(this::mapToDto);
    }

    protected List<Dto> mapToDto(Collection<Entity> entities) {
        return entities.stream()
                       .map(entity -> getMapper().map(entity, getGenericClassDto()))
                       .collect(Collectors.toList());
    }

    protected Dto mapToDto(Entity entity) {
        if(entity == null) {
            return null;
        }

        return getMapper().map(entity, getGenericClassDto());
    }

    protected List<Entity> mapToEntity(Collection<Dto> dtos) {
        return dtos.stream()
                   .map(entity -> getMapper().map(entity, getGenericClassEntity()))
                   .collect(Collectors.toList());
    }

    protected Entity mapToEntity(Dto dto) {
        if(dto == null) {
            return null;
        }

        return getMapper().map(dto, getGenericClassEntity());
    }

    protected <D> D map(Object obj, Class<D> destClazz) {
        if (obj == null) {
            return null;
        }

        return getMapper().map(obj, destClazz);
    }

    protected <S, D> Page<D> map(Page<S> entities, Class<D> destClazz) {
        return entities.map(e -> map(e, destClazz));
    }

    protected <S, D> List<D> map(List<S> entities, Class<D> destClazz) {
        return entities.stream().map(e -> map(e, destClazz)).collect(Collectors.toList());
    }

    protected ModelMapper createMapper() {
        return new ModelMapper();
    }

    @SuppressWarnings("unchecked")
    protected Class<Dto> getGenericClassDto() {
        if(genericClassDto == null) {
            genericClassDto = (Class<Dto>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[0];
        }

        return genericClassDto;
    }

    @SuppressWarnings("unchecked")
    private Class<Entity> getGenericClassEntity() {
        if(genericClassEntity == null) {
            genericClassEntity = (Class<Entity>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1];
        }

        return genericClassEntity;
    }

    protected ModelMapper getMapper() {
        if(mapper == null) {
            mapper = createMapper();
            mapper.addMappings(new PetEntityPropertyMap());
        }

        return mapper;
    }
}
