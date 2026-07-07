import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌿 FarmTrace</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Traceability</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
