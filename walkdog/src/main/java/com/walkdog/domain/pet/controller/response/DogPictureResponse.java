package com.walkdog.domain.pet.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class DogPictureResponse implements Serializable {
    private String message;
    private String status;
}
