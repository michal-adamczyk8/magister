package com.walkdog.common.email.repository;

import com.walkdog.common.enums.EmailTemplateType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailTemplateRepository extends JpaRepository<EmailTemplate, Long> {
    EmailTemplate findByEmailTemplateType(EmailTemplateType emailTemplateType);
}
