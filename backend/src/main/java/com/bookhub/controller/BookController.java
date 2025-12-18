package com.bookhub.controller;

import com.bookhub.dto.ApiResponse;
import com.bookhub.dto.BookDTO;
import com.bookhub.service.BookService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<BookDTO>>> getAllBooks() {
        List<BookDTO> books = bookService.getAllBooks();
        return ResponseEntity.ok(ApiResponse.success("Books retrieved successfully", books));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<BookDTO>> getBookById(@PathVariable Long id) {
        BookDTO book = bookService.getBookById(id);
        return ResponseEntity.ok(ApiResponse.success("Book retrieved successfully", book));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<BookDTO>> createBook(@Valid @RequestBody BookDTO bookDTO) {
        BookDTO createdBook = bookService.createBook(bookDTO);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Book created successfully", createdBook));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<BookDTO>> updateBook(
            @PathVariable Long id,
            @Valid @RequestBody BookDTO bookDTO) {
        BookDTO updatedBook = bookService.updateBook(id, bookDTO);
        return ResponseEntity.ok(ApiResponse.success("Book updated successfully", updatedBook));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.ok(ApiResponse.success("Book deleted successfully", null));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<List<BookDTO>>> getBooksByCategory(@PathVariable String category) {
        List<BookDTO> books = bookService.getBooksByCategory(category);
        return ResponseEntity.ok(ApiResponse.success("Books retrieved by category", books));
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<ApiResponse<List<BookDTO>>> getBooksByType(@PathVariable String type) {
        List<BookDTO> books = bookService.getBooksByType(type);
        return ResponseEntity.ok(ApiResponse.success("Books retrieved by type", books));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<BookDTO>>> searchBooks(@RequestParam String keyword) {
        List<BookDTO> books = bookService.searchBooks(keyword);
        return ResponseEntity.ok(ApiResponse.success("Search results", books));
    }
}
