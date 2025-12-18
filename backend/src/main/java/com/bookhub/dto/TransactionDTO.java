package com.bookhub.dto;

import java.util.Map;

public class TransactionDTO {

    private Long bookId;
    private String bookTitle;
    private String transactionType;
    private Map<String, String> userDetails;
    private Map<String, String> paymentDetails;
    private Double price;

    // Getters and Setters
    public Long getBookId() { return bookId; }
    public void setBookId(Long bookId) { this.bookId = bookId; }

    public String getBookTitle() { return bookTitle; }
    public void setBookTitle(String bookTitle) { this.bookTitle = bookTitle; }

    public String getTransactionType() { return transactionType; }
    public void setTransactionType(String transactionType) { this.transactionType = transactionType; }

    public Map<String, String> getUserDetails() { return userDetails; }
    public void setUserDetails(Map<String, String> userDetails) { this.userDetails = userDetails; }

    public Map<String, String> getPaymentDetails() { return paymentDetails; }
    public void setPaymentDetails(Map<String, String> paymentDetails) { this.paymentDetails = paymentDetails; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
