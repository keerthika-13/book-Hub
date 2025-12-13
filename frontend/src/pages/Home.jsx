import "../styles/Home.css";
import heroImg from "../assets/home/hero.png";
import communityImg from "../assets/home/community.png";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            Share.<br />
            Exchange.<br />
            Read More.
          </h1>
          <p>
            Book-Hub is a community-driven platform to donate, exchange,
            rent, or sell books easily and affordably.
          </p>
          <button>Get Started</button>
          <button>Explore Books</button>
        </div>

        <img src={heroImg} alt="Book sharing illustration" />
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>What You Can Do</h2>
        <ul>
          <li>Donate Books</li>
          <li>Exchange Books</li>
          <li>Sell Books</li>
          <li>Rent Books</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <h2>How It Works</h2>
        <ol>
          <li>Add your book with details</li>
          <li>Choose donate, exchange, rent, or sell</li>
          <li>Delivery or direct meetup</li>
        </ol>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2>Popular Categories</h2>
        <span>Programming</span>
        <span>Fiction</span>
        <span>Romentic </span>
        <span>Self-Help</span>
      </section>

      {/* COMMUNITY */}
      <section className="community">
        <img src={communityImg} alt="Reading community" />
        <h2>Why Book-Hub?</h2>
        <p>
          Save money, reuse books, and support sustainable learning
          through a trusted reading community.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Sharing Books Today</h2>
        <button>Join Book-Hub</button>
      </section>

    </div>
  );
}

export default Home;
