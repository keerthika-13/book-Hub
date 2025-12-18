package com.bookhub.service;

import com.bookhub.dto.BookDTO;
import com.bookhub.entity.Book;
import com.bookhub.exception.ResourceNotFoundException;
import com.bookhub.repository.BookRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<BookDTO> getAllBooks() {
        return bookRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public BookDTO getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + id));
        return convertToDTO(book);
    }

    public BookDTO createBook(BookDTO bookDTO) {
        Book book = convertToEntity(bookDTO);
        Book savedBook = bookRepository.save(book);
        return convertToDTO(savedBook);
    }

    public BookDTO updateBook(Long id, BookDTO bookDTO) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + id));

        book.setTitle(bookDTO.getTitle());
        book.setAuthor(bookDTO.getAuthor());
        book.setCategory(bookDTO.getCategory());
        book.setType(bookDTO.getType());
        book.setCondition(bookDTO.getCondition());
        book.setCoverUrl(bookDTO.getCoverUrl());
        book.setDescription(bookDTO.getDescription());
        book.setPrice(bookDTO.getPrice());

        Book updatedBook = bookRepository.save(book);
        return convertToDTO(updatedBook);
    }

    public void deleteBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with id: " + id));
        bookRepository.delete(book);
    }

    public List<BookDTO> getBooksByCategory(String category) {
        return bookRepository.findAll()
                .stream()
                .filter(book -> book.getCategory().equalsIgnoreCase(category))
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<BookDTO> getBooksByType(String type) {
        return bookRepository.findAll()
                .stream()
                .filter(book -> book.getType().equalsIgnoreCase(type))
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<BookDTO> searchBooks(String keyword) {
        return bookRepository.findAll()
                .stream()
                .filter(book -> 
                    book.getTitle().toLowerCase().contains(keyword.toLowerCase()) ||
                    book.getAuthor().toLowerCase().contains(keyword.toLowerCase())
                )
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    // Conversion methods
    private BookDTO convertToDTO(Book book) {
        return new BookDTO(
                book.getId(),
                book.getTitle(),
                book.getAuthor(),
                book.getCategory(),
                book.getType(),
                book.getCondition(),
                book.getCoverUrl(),
                book.getDescription(),
                book.getPrice()
        );
    }

    private Book convertToEntity(BookDTO dto) {
        Book book = new Book();
        book.setTitle(dto.getTitle());
        book.setAuthor(dto.getAuthor());
        book.setCategory(dto.getCategory());
        book.setType(dto.getType());
        book.setCondition(dto.getCondition());
        book.setCoverUrl(dto.getCoverUrl());
        book.setDescription(dto.getDescription());
        book.setPrice(dto.getPrice());
        return book;
    }
}
