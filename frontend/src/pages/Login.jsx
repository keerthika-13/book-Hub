import { useNavigate, Link } from "react-router-dom";
import "../styles/Form.css";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault(); // VERY IMPORTANT

    alert("Login successful");

    // THIS LINE DOES THE REDIRECT
    navigate("/");
  }

  return (
    <div className="form-page">
      <form className="form-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        {/* MUST BE type="submit" */}
        <button type="submit">Login</button>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
