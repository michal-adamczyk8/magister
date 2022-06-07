package com.walkdog.domain.walks.controller.request;

import com.walkdog.common.enums.WalkStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddWalkRequest {
    @Future
    private LocalDateTime dateTime;
    private long petId;
    private long userId;
    private WalkStatusEnum status;
}
