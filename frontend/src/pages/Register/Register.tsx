import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    role: "customer",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await api.post("/register/", {
        username: form.username,
        email: form.email,
        phone: form.phone,
        role: form.role,
        password: form.password,
      });

      alert("Account created successfully. Please log in.");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Unable to create account.");
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1>Create Account</h1>
        <p>Join FarmTrace today</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={form.username} onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))} />

          <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />

          <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />

          <select value={form.role} onChange={(e) => setForm((prev) => ({ ...prev, role: e.target.value }))}>
            <option value="customer">Customer</option>
            <option value="farmer">Farmer</option>
            <option value="distributor">Distributor</option>
            <option value="retailer">Retailer</option>
          </select>

          <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} />

          <input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={(e) => setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))} />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;