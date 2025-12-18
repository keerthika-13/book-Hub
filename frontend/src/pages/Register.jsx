import { useNavigate, Link } from "react-router-dom";
import "../styles/Form.css";

function Register() {
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault(); // VERY IMPORTANT

    alert("Registration successful");

    // REDIRECT TO LOGIN PAGE
    navigate("/login");
  }

  return (
    <div className="form-page">
      <form className="form-box" onSubmit={handleRegister}>
        <h2>Register</h2>

        <input placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        {/* MUST BE type="submit" */}
        <button type="submit">Register</button>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
