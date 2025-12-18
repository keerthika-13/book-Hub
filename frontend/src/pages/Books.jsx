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
  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [paymentDetails, setPaymentDetails] = useState({
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

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

  const handleTransaction = (type) => {
    setTransactionType(type);
    setShowTransactionForm(true);
  };

  const handleUserDetailsChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePaymentDetailsChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const submitTransaction = (e) => {
    e.preventDefault();
    
    const transactionData = {
      bookId: selectedBook.id,
      bookTitle: selectedBook.title,
      transactionType: transactionType,
      userDetails: userDetails,
      paymentDetails: transactionType !== "donate" ? paymentDetails : null,
      price: selectedBook.price,
      date: new Date().toISOString()
    };

    fetch("http://localhost:8080/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionData)
    })
      .then(res => res.json())
      .then(data => {
        alert(`${transactionType === "sell" ? "Purchase" : transactionType === "rent" ? "Rental" : "Donation request"} successful!`);
        setShowTransactionForm(false);
        setSelectedBook(null);
        setUserDetails({ name: "", email: "", phone: "", address: "" });
        setPaymentDetails({ paymentMethod: "card", cardNumber: "", expiryDate: "", cvv: "" });
      })
      .catch(err => {
        console.error("Error submitting transaction:", err);
        alert("Transaction failed. Please try again.");
      });
  };

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
                <button className="action-btn" onClick={() => handleTransaction("donate")}>
                  Request Donation
                </button>
              </>
            )}

            {selectedBook.type === "rent" && (
              <>
                <p className="flow-info">
                  This book can be rented for a limited period.
                </p>
                <button className="action-btn" onClick={() => handleTransaction("rent")}>
                  Proceed to Rent
                </button>
              </>
            )}

            {selectedBook.type === "sell" && (
              <>
                <p className="flow-info">
                  This book is available for purchase.
                </p>
                <button className="action-btn" onClick={() => handleTransaction("sell")}>
                  Buy Now
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* TRANSACTION FORM MODAL */}
      {showTransactionForm && (
        <div className="modal-overlay" onClick={() => setShowTransactionForm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{maxWidth: '500px', maxHeight: '90vh', overflowY: 'auto'}}>
            <button className="close-btn" onClick={() => setShowTransactionForm(false)}>
              ×
            </button>

            <h2>
              {transactionType === "sell" ? "Purchase Book" : transactionType === "rent" ? "Rent Book" : "Request Donation"}
            </h2>
            <p style={{marginBottom: '20px', color: '#666'}}>
              Book: <strong>{selectedBook?.title}</strong>
              {selectedBook?.price && <span> - ${selectedBook.price}</span>}
            </p>

            <form onSubmit={submitTransaction}>
              <h3>Your Details</h3>
              <input
                name="name"
                placeholder="Full Name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                required
              />
              <input
                name="phone"
                placeholder="Phone Number"
                value={userDetails.phone}
                onChange={handleUserDetailsChange}
                required
              />
              <textarea
                name="address"
                placeholder="Delivery Address"
                value={userDetails.address}
                onChange={handleUserDetailsChange}
                rows="3"
                required
                style={{width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ddd'}}
              />

              {transactionType !== "donate" && (
                <>
                  <h3>Payment Details</h3>
                  <select
                    name="paymentMethod"
                    value={paymentDetails.paymentMethod}
                    onChange={handlePaymentDetailsChange}
                    required
                  >
                    <option value="card">Credit/Debit Card</option>
                    <option value="upi">UPI</option>
                    <option value="netbanking">Net Banking</option>
                    <option value="cod">Cash on Delivery</option>
                  </select>

                  {paymentDetails.paymentMethod === "card" && (
                    <>
                      <input
                        name="cardNumber"
                        placeholder="Card Number"
                        value={paymentDetails.cardNumber}
                        onChange={handlePaymentDetailsChange}
                        maxLength="16"
                        required
                      />
                      <div style={{display: 'flex', gap: '10px'}}>
                        <input
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={paymentDetails.expiryDate}
                          onChange={handlePaymentDetailsChange}
                          maxLength="5"
                          required
                          style={{flex: 1}}
                        />
                        <input
                          name="cvv"
                          placeholder="CVV"
                          value={paymentDetails.cvv}
                          onChange={handlePaymentDetailsChange}
                          maxLength="3"
                          required
                          style={{flex: 1}}
                        />
                      </div>
                    </>
                  )}

                  {paymentDetails.paymentMethod === "upi" && (
                    <input
                      name="upiId"
                      placeholder="UPI ID"
                      value={paymentDetails.upiId || ""}
                      onChange={handlePaymentDetailsChange}
                      required
                    />
                  )}
                </>
              )}

              <button type="submit" className="action-btn" style={{width: '100%', marginTop: '20px'}}>
                {transactionType === "donate" ? "Submit Request" : "Confirm Payment"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Books;
