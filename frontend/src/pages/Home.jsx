import { useEffect, useState } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

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

function Home() {
  const [stats, setStats] = useState({});
  const [latestBooks, setLatestBooks] = useState([]);

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
    if (!coverUrl) return null;
    if (coverUrl.startsWith("data:")) return coverUrl; // base64
    return imageMap[coverUrl] || null;
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/home/stats")
      .then(res => res.json())
      .then(data => setStats(data));

    fetch("http://localhost:8080/api/home/latest-books")
      .then(res => res.json())
      .then(data => setLatestBooks(data));
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Share, Exchange & Discover Books</h1>
          <p>A community-driven platform for affordable learning.</p>

          <Link to="/books"><button>Explore Books</button></Link>
          <Link to="/add-book"><button className="outline">Add a Book</button></Link>
        </div>
      </section>

      {/* STATS – REAL DATA */}
      <section className="stats">
        <div><h3>{stats.books || 0}+</h3><p>Books</p></div>
        <div><h3>{stats.users || 0}+</h3><p>Users</p></div>
        <div><h3>{stats.exchanges || 0}+</h3><p>Exchanges</p></div>
        <div><h3>{stats.donations || 0}+</h3><p>Donations</p></div>
      </section>

      {/* LATEST BOOKS – REAL CONTENT */}
      <section className="latest">
        <h2>Recently Added Books</h2>

        <div className="latest-grid">
          {latestBooks.map(book => (
            <div key={book.id} className="latest-card">
              {getImageSrc(book.coverUrl) && (
                <img 
                  src={getImageSrc(book.coverUrl)} 
                  alt={book.title}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
                />
              )}
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <span>{book.category}</span>
              <p style={{fontSize: '0.9em', color: '#777'}}>Condition: {book.condition}</p>
            </div>
          ))}
        </div>

        <Link to="/books">
          <button className="primary-btn">View All Books</button>
        </Link>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Sharing Knowledge Today</h2>
        <Link to="/register"><button>Join Book-Hub</button></Link>
      </section>

    </div>
  );
}

export default Home;
