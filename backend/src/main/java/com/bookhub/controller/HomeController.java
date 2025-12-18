package com.bookhub.controller;

import com.bookhub.repository.BookRepository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/home")
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    private final BookRepository bookRepository;

    public HomeController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @GetMapping("/stats")
    public Map<String, Object> getStats() {
        Map<String, Object> stats = new HashMap<>();

        long totalBooks = bookRepository.count();
        long donations = bookRepository.findAll()
                .stream()
                .filter(b -> b.getType().equals("donate"))
                .count();

        stats.put("books", totalBooks);
        stats.put("users", 2000);       // dummy for now
        stats.put("exchanges", 1200);   // dummy
        stats.put("donations", donations);

        return stats;
    }

    @GetMapping("/latest-books")
    public Object getLatestBooks() {
        return bookRepository.findAll()
                .stream()
                .sorted((a, b) -> Long.compare(b.getId(), a.getId()))
                .limit(4)
                .toList();
    }
}
