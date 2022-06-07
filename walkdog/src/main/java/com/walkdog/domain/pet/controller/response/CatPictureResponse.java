package com.walkdog.domain.pet.controller.response;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
public class CatPictureResponse implements Serializable {
    private String id;
    private Date created_at;
    private String[] tags;
    private String url;
}
