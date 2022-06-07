package com.walkdog.common.email.service;

import com.walkdog.common.email.hsitory.EmailSendingHistory;
import com.walkdog.common.email.hsitory.EmailSendingHistoryRepository;
import com.walkdog.common.email.repository.EmailTemplate;
import com.walkdog.common.email.repository.EmailTemplateRepository;
import com.walkdog.common.enums.EmailTemplateType;
import com.walkdog.domain.user.repository.UserEntity;
import com.walkdog.domain.user.service.UserDto;
import com.walkdog.domain.walks.service.dto.WalkDto;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Optional;

@Service
public class EmailService {
    @Value("${spring.mail.username}")
    private String mailServerUsername;

    private final JavaMailSender javaMailSender;
    private final EmailTemplateRepository emailTemplateRepository;
    private final EmailSendingHistoryRepository emailSendingHistoryRepository;

    @Autowired
    public EmailService(JavaMailSender javaMailSenderImpl, EmailTemplateRepository emailTemplateRepository,
                        EmailSendingHistoryRepository emailSendingHistoryRepository) {
        this.javaMailSender = javaMailSenderImpl;
        this.emailTemplateRepository = emailTemplateRepository;
        this.emailSendingHistoryRepository = emailSendingHistoryRepository;
    }

    public void sendWelcomeMessageForAddedUser(UserDto user, String password) {
        EmailTemplate userRegistrationEmailTemplate = emailTemplateRepository.findByEmailTemplateType(EmailTemplateType.ADDED_USER_REGISTRATION_EMAIL);
        String processedText = processEmailBody(user, password, userRegistrationEmailTemplate);
        sendNewEmail(user.getEmail(), userRegistrationEmailTemplate.getSubject(), processedText, EmailTemplateType.ADDED_USER_REGISTRATION_EMAIL);
    }

    public void sendWelcomeMessage(UserDto user) {
        EmailTemplate userRegistrationEmailTemplate = emailTemplateRepository.findByEmailTemplateType(EmailTemplateType.USER_REGISTRATION_EMAIL);
        String processedText = processEmailBody(user, userRegistrationEmailTemplate);
        sendNewEmail(user.getEmail(), userRegistrationEmailTemplate.getSubject(), processedText, EmailTemplateType.USER_REGISTRATION_EMAIL);
    }

    public void sendAcceptedWalkMessage(WalkDto walk) {
        EmailTemplate template = emailTemplateRepository.findByEmailTemplateType(EmailTemplateType.WALK_CONFIRMATION);
        String processedText = processEmailBody(walk.getUser(), template);
        sendNewEmail(walk.getUser().getEmail(), template.getSubject(), processedText, EmailTemplateType.WALK_CONFIRMATION);
    }

    public void sendCancelledWalkMessage(WalkDto walk) {
        EmailTemplate template = emailTemplateRepository.findByEmailTemplateType(EmailTemplateType.WALK_CANCELLATION);
        String processedText = processEmailBody(walk.getUser(), template);
        sendNewEmail(walk.getUser().getEmail(), template.getSubject(), processedText, EmailTemplateType.WALK_CANCELLATION);
    }

    private String processEmailBody(UserDto user, EmailTemplate byEmailTemplateType) {
        return String.format(byEmailTemplateType.getText(), user.getFirstName() + " " + user.getLastName());
    }

    private String processEmailBody(UserDto user, String password, EmailTemplate byEmailTemplateType) {
        return String.format(byEmailTemplateType.getText(), user.getFirstName() + " " + user.getLastName(), password);
    }

    private void sendNewEmail(String emailTo, String subject, String body, EmailTemplateType templateType) {
        boolean wasError = false;
        String errorMessage = null;
        try {
            MimeMessage message = prepareMessage(javaMailSender.createMimeMessage(), emailTo, subject, body);
            javaMailSender.send(message);
        } catch (Exception e) {
            wasError = true;
            errorMessage = e.getCause().getLocalizedMessage();
            e.printStackTrace();
        }
        saveToHistory(emailTo, templateType, wasError, Optional.ofNullable(errorMessage).orElse(StringUtils.EMPTY));
    }

    private MimeMessage prepareMessage(MimeMessage message, String emailTo, String subject, String body) throws MessagingException {
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
        helper.setTo(emailTo);
        helper.setSubject(subject);
        helper.setText(body, true);
        helper.setSentDate(new Date());
        return message;
    }

    private void saveToHistory(String emailTo, EmailTemplateType emailTemplateType, Boolean wasError, String errorMessage) {
        EmailSendingHistory sendingHistory = new EmailSendingHistory();
        sendingHistory.setSendDate(new Date());
        sendingHistory.setEmailFrom(mailServerUsername);
        sendingHistory.setEmailTo(emailTo);
        sendingHistory.setEmailTemplateType(emailTemplateType);
        sendingHistory.setWasError(wasError);
        sendingHistory.setErrorMessage(errorMessage);
        emailSendingHistoryRepository.save(sendingHistory);
    }
}
