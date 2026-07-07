import "./Features.css";
import { FaLeaf, FaQrcode, FaShieldAlt } from "react-icons/fa";

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-container">
        <div className="feature-card">
          <FaLeaf className="icon" />
          <h3>Fresh Products</h3>
          <p>Directly sourced from trusted farmers.</p>
        </div>
        <div className="feature-card">
          <FaQrcode className="icon" />
          <h3>QR Traceability</h3>
          <p>Track every product from farm to customer.</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="icon" />
          <h3>Food Safety</h3>
          <p>Quality monitoring for every product batch.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
