package com.bookhub.config;

import com.bookhub.entity.Book;
import com.bookhub.repository.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner loadData(BookRepository repo) {
        return args -> {
            if (repo.count() == 0) {

                repo.save(new Book("Java Programming", "Herbert Schildt", "Academic", "sell", "Good", "/static/media/java.jpg", null, 45.99));
                repo.save(new Book("Clean Code", "Robert C. Martin", "Academic", "rent", "Like New", "/static/media/cleancode.jpg", null, 29.99));
                repo.save(new Book("Data Structures", "Mark Allen Weiss", "Academic", "sell", "Good", "/static/media/dsa.jpg", null, 55.00));
                repo.save(new Book("Spring Boot in Action", "Craig Walls", "Academic", "rent", "New", "/static/media/springboot.jpg", null, 39.99));
                repo.save(new Book("React Explained", "Zac Gordon", "Academic", "sell", "Like New", "/static/media/react.jpg", null, 35.00));

                repo.save(new Book("The Alchemist", "Paulo Coelho", "Novel", "donate", "Fair", "/static/media/alchemist.jpg", null, null));
                repo.save(new Book("Atomic Habits", "James Clear", "Motivation", "sell", "New", "/static/media/atomichabits.jpg", null, 25.99));
                repo.save(new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "Motivation", "sell", "Good", "/static/media/richdad.jpg", null, 19.99));
                repo.save(new Book("It Ends With Us", "Colleen Hoover", "Novel", "rent", "Like New", "/static/media/itendswithus.jpg", null, 15.99));
                repo.save(new Book("Pride and Prejudice", "Jane Austen", "Novel", "donate", "Fair", "/static/media/pride.jpg", null, null));
            }
        };
    }
}
