package com.walkdog.common.email.repository;

import com.walkdog.common.enums.EmailTemplateType;
import com.walkdog.common.enums.converters.EmailTemplateTypeConverter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "email_template")
public class EmailTemplate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Convert(converter = EmailTemplateTypeConverter.class)
    @Column(name = "email_template_type")
    private EmailTemplateType emailTemplateType;

    @Column(name = "subject")
    private String subject;

    @Column(name = "text")
    private String text;
}
