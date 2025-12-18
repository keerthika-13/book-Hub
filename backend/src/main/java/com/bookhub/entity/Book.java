package com.bookhub.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Column(nullable = false)
    private String title;

    @NotBlank(message = "Author is required")
    @Column(nullable = false)
    private String author;

    @NotBlank(message = "Category is required")
    @Column(nullable = false)
    private String category;

    @NotBlank(message = "Type is required")
    @Column(nullable = false)
    private String type; // sell, rent, donate

    @NotBlank(message = "Condition is required")
    @Column(name = "book_condition", nullable = false)
    private String condition; // New, Like New, Good, Fair

    @Lob
    @Column(name = "cover_url", columnDefinition = "CLOB")
    private String coverUrl; // base64 string or URL

    @Column(length = 1000)
    private String description;

    private Double price;

    public Book() {}

    public Book(String title, String author, String category, String type, String condition, String coverUrl, String description, Double price) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.type = type;
        this.condition = condition;
        this.coverUrl = coverUrl;
        this.description = description;
        this.price = price;
    }

    // Getters
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public String getCategory() { return category; }
    public String getType() { return type; }
    public String getCondition() { return condition; }
    public String getCoverUrl() { return coverUrl; }
    public String getDescription() { return description; }
    public Double getPrice() { return price; }

    // Setters
    public void setId(Long id) { this.id = id; }
    public void setTitle(String title) { this.title = title; }
    public void setAuthor(String author) { this.author = author; }
    public void setCategory(String category) { this.category = category; }
    public void setType(String type) { this.type = type; }
    public void setCondition(String condition) { this.condition = condition; }
    public void setCoverUrl(String coverUrl) { this.coverUrl = coverUrl; }
    public void setDescription(String description) { this.description = description; }
    public void setPrice(Double price) { this.price = price; }
}
