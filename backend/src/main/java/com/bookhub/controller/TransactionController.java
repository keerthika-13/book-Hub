package com.bookhub.controller;

import com.bookhub.dto.ApiResponse;
import com.bookhub.dto.TransactionDTO;
import com.bookhub.entity.Transaction;
import com.bookhub.service.TransactionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
@CrossOrigin(origins = "http://localhost:3000")
public class TransactionController {

    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Transaction>> createTransaction(@RequestBody TransactionDTO transactionDTO) {
        Transaction transaction = transactionService.createTransaction(transactionDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Transaction completed successfully", transaction));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Transaction>>> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return ResponseEntity.ok(ApiResponse.success("Transactions retrieved", transactions));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<ApiResponse<List<Transaction>>> getTransactionsByEmail(@PathVariable String email) {
        List<Transaction> transactions = transactionService.getTransactionsByEmail(email);
        return ResponseEntity.ok(ApiResponse.success("User transactions retrieved", transactions));
    }

    @GetMapping("/book/{bookId}")
    public ResponseEntity<ApiResponse<List<Transaction>>> getTransactionsByBook(@PathVariable Long bookId) {
        List<Transaction> transactions = transactionService.getTransactionsByBookId(bookId);
        return ResponseEntity.ok(ApiResponse.success("Book transactions retrieved", transactions));
    }
}
