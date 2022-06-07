package com.walkdog.common.email.hsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailSendingHistoryRepository extends JpaRepository<EmailSendingHistory, Long> {
}
