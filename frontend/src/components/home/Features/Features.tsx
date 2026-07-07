import "./Features.css";
import { FaLeaf, FaQrcode, FaShieldAlt, FaChartLine } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Products",
      description: "Directly sourced from trusted farmers.",
    },
    {
      icon: <FaQrcode />,
      title: "QR Traceability",
      description: "Track every product from farm to customer.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Food Safety",
      description: "Quality and safety monitoring at every stage.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description: "Real-time insights for better decisions.",
    },
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;