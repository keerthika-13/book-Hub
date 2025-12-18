import { useState } from "react";

function AddBook() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    type: "sell",
    condition: "Good",
    coverUrl: ""
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleCoverUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBook({ ...book, coverUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    })
      .then(res => res.json())
      .then(() => {
        alert("Book added successfully!");
        setBook({ title: "", author: "", category: "", type: "sell", condition: "Good", coverUrl: "" });
      });
  };

  return (
    <div className="form-container">
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
        <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={book.category} onChange={handleChange} required />

        <select name="type" value={book.type} onChange={handleChange}>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
          <option value="donate">Donate</option>
        </select>

        <select name="condition" value={book.condition} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Like New">Like New</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>

        <input type="file" accept="image/*" onChange={handleCoverUpload} />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
