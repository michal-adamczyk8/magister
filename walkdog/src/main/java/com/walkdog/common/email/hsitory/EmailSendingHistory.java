package com.walkdog.common.email.hsitory;


import com.walkdog.common.enums.EmailTemplateType;
import com.walkdog.common.enums.converters.EmailTemplateTypeConverter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "email_sending_history")
public class EmailSendingHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name = "send_date")
    private Date sendDate;

    @Column(name = "email_from")
    private String emailFrom;

    @Column(name = "email_to")
    private String emailTo;

    @Convert(converter = EmailTemplateTypeConverter.class)
    @Column(name = "email_template_type")
    private EmailTemplateType emailTemplateType;

    @Column(name = "was_error")
    private boolean wasError;

    @Column(name = "error_message")
    private String errorMessage;
}
