package com.bookhub.service;

import com.bookhub.dto.TransactionDTO;
import com.bookhub.entity.Transaction;
import com.bookhub.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
public class TransactionService {

    private final TransactionRepository transactionRepository;

    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public Transaction createTransaction(TransactionDTO dto) {
        Transaction transaction = new Transaction();
        
        transaction.setBookId(dto.getBookId());
        transaction.setBookTitle(dto.getBookTitle());
        transaction.setTransactionType(dto.getTransactionType());
        
        // Extract user details
        Map<String, String> userDetails = dto.getUserDetails();
        transaction.setUserName(userDetails.get("name"));
        transaction.setUserEmail(userDetails.get("email"));
        transaction.setUserPhone(userDetails.get("phone"));
        transaction.setUserAddress(userDetails.get("address"));
        
        // Extract payment details if not donation
        if (dto.getPaymentDetails() != null) {
            transaction.setPaymentMethod(dto.getPaymentDetails().get("paymentMethod"));
        }
        
        transaction.setPrice(dto.getPrice());
        transaction.setPaymentStatus("completed");
        
        return transactionRepository.save(transaction);
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public List<Transaction> getTransactionsByEmail(String email) {
        return transactionRepository.findByUserEmail(email);
    }

    public List<Transaction> getTransactionsByBookId(Long bookId) {
        return transactionRepository.findByBookId(bookId);
    }
}
