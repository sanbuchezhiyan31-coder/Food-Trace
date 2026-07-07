import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login/", form);

      // Save JWT Tokens
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      // Save User Details
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);

      // Navigate based on role
      switch (response.data.role) {
        case "farmer":
          navigate("/farmer");
          break;

        case "customer":
          navigate("/customer");
          break;

        case "distributor":
          navigate("/distributor");
          break;

        case "retailer":
          navigate("/retailer");
          break;

        case "admin":
          navigate("/admin");
          break;

        default:
          navigate("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Welcome Back</h1>
        <p>Login to continue to FarmTrace</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;