package com.walkdog.security.listener;

import com.walkdog.domain.user.UserPrincipal;
import com.walkdog.security.utility.LoginAttemptService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.security.authentication.event.AuthenticationSuccessEvent;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthenticationSuccessListener {

    private final LoginAttemptService loginAttemptService;

    @EventListener
    public void onAuthenticationSuccess(AuthenticationSuccessEvent event) {
        Object principle = event.getAuthentication().getPrincipal();
        if (principle instanceof UserPrincipal) {
            UserPrincipal user = (UserPrincipal) event.getAuthentication().getPrincipal();
            loginAttemptService.evictUserFromLoginAttemptCache(user.getUsername());
        }
    }
}
