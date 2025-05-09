import { useState } from "react";
import axios from "axios";
import { API_URL } from "../config/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        `${API_URL}/api/users/login`,
        { email, password },
        { withCredentials: true }
      );

      const { data: userData } = await axios.get(`${API_URL}/api/users/me`, {
        withCredentials: true,
      });

      login(userData);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">LOGIN</h2>
        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form" style={{alignItems:"normal"}}>
          <label>Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder="Enter your email"
          />

          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Enter your password"
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="login-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="login-link">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

/*import React, { useState } from "react";
import "../styles/Login.css";
import Logo from "../components/Logo"; // Adjust path as needed

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <Logo />
        <h2>Login to TripInLEB</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;*/