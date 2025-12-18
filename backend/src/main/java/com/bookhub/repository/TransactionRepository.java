package com.bookhub.repository;

import com.bookhub.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserEmail(String email);
    List<Transaction> findByBookId(Long bookId);
}
