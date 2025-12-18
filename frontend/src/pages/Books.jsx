import { useState, useEffect } from "react";
import "../styles/Books.css";

/* Import book images */
import javaImg from "../assets/books/java.jpg";
import cleanCodeImg from "../assets/books/cleancode.jpg";
import dsaImg from "../assets/books/dsa.jpg";
import springImg from "../assets/books/springboot.jpg";
import reactImg from "../assets/books/react.jpg";
import alchemistImg from "../assets/books/alchemist.jpg";
import richDadImg from "../assets/books/richdad.jpg";
import atomicImg from "../assets/books/atomichabits.jpg";
import itEndsImg from "../assets/books/itendswithus.jpg";
import prideImg from "../assets/books/pride.jpg";

function Books() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  // Map backend paths to imported images
  const imageMap = {
    "/static/media/java.jpg": javaImg,
    "/static/media/cleancode.jpg": cleanCodeImg,
    "/static/media/dsa.jpg": dsaImg,
    "/static/media/springboot.jpg": springImg,
    "/static/media/react.jpg": reactImg,
    "/static/media/alchemist.jpg": alchemistImg,
    "/static/media/richdad.jpg": richDadImg,
    "/static/media/atomichabits.jpg": atomicImg,
    "/static/media/itendswithus.jpg": itEndsImg,
    "/static/media/pride.jpg": prideImg
  };

  const getImageSrc = (coverUrl) => {
    if (!coverUrl) return "https://via.placeholder.com/150x200?text=No+Cover";
    if (coverUrl.startsWith("data:")) return coverUrl; // base64
    return imageMap[coverUrl] || "https://via.placeholder.com/150x200?text=No+Cover";
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then(res => res.json())
      .then(data => setBooks(data.data || []))
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  /* FILTER + SEARCH */
  const filteredBooks = books.filter(book => {
    const matchesFilter =
      activeFilter === "All" || book.category === activeFilter;

    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="books-page">
      <h1 className="books-title">Available Books</h1>

      {/* SEARCH BAR */}
      <input
        className="search-input"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* FILTER BAR */}
      <div className="filter-bar">
        {["All", "Academic", "Novel", "Motivation"].map(filter => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* BOOK GRID */}
      <div className="books-grid">
        {filteredBooks.map(book => (
          <div className="book-card animated" key={book.id}>
            <img 
              src={getImageSrc(book.coverUrl)} 
              alt={book.title} 
            />
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>

            <span className={`tag ${book.type}`}>
              {book.type === "sell" && "For Sale"}
              {book.type === "rent" && "For Rent"}
              {book.type === "donate" && "Donate"}
            </span>

            <p className="category">{book.category}</p>
            <p className="condition">Condition: {book.condition}</p>

            <button onClick={() => setSelectedBook(book)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* BOOK DETAILS MODAL */}
      {selectedBook && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelectedBook(null)}
            >
              ×
            </button>

            <img 
              src={getImageSrc(selectedBook.coverUrl)} 
              alt={selectedBook.title} 
            />
            <h2>{selectedBook.title}</h2>

            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Category:</strong> {selectedBook.category}</p>
            <p><strong>Type:</strong> {selectedBook.type.toUpperCase()}</p>
            <p><strong>Condition:</strong> {selectedBook.condition}</p>
            <p className="description">{selectedBook.description}</p>

            {/* BUSINESS ACTIONS */}
            {selectedBook.type === "donate" && (
              <>
                <p className="flow-info">
                  This book is available for free donation.
                </p>
                <button className="action-btn">
                  Request Donation
                </button>
              </>
            )}

            {selectedBook.type === "rent" && (
              <>
                <p className="flow-info">
                  This book can be rented for a limited period.
                </p>
                <button className="action-btn">
                  Proceed to Rent
                </button>
              </>
            )}

            {selectedBook.type === "sell" && (
              <>
                <p className="flow-info">
                  This book is available for purchase.
                </p>
                <button className="action-btn">
                  Buy Now
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
