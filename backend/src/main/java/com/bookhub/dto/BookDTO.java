package com.bookhub.dto;

import jakarta.validation.constraints.NotBlank;

public class BookDTO {

    private Long id;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Author is required")
    private String author;

    @NotBlank(message = "Category is required")
    private String category;

    @NotBlank(message = "Type is required")
    private String type;

    @NotBlank(message = "Condition is required")
    private String condition;

    private String coverUrl;
    private String description;
    private Double price;

    public BookDTO() {}

    public BookDTO(Long id, String title, String author, String category, String type, String condition, String coverUrl, String description, Double price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.category = category;
        this.type = type;
        this.condition = condition;
        this.coverUrl = coverUrl;
        this.description = description;
        this.price = price;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getCondition() { return condition; }
    public void setCondition(String condition) { this.condition = condition; }

    public String getCoverUrl() { return coverUrl; }
    public void setCoverUrl(String coverUrl) { this.coverUrl = coverUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
}
