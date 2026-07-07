import "./HowItWorks.css";
import { FaSeedling, FaTruck, FaStore, FaShoppingBasket } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaSeedling />,
      title: "Farmer",
      description: "Harvests fresh produce and uploads batch details.",
    },
    {
      icon: <FaTruck />,
      title: "Distributor",
      description: "Transports products while updating shipment status.",
    },
    {
      icon: <FaStore />,
      title: "Retailer",
      description: "Receives inventory and makes products available.",
    },
    {
      icon: <FaShoppingBasket />,
      title: "Customer",
      description: "Scans the QR code to view the complete product history.",
    },
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>

      <div className="steps">
        {steps.map((step, index) => (
          <div className="step-card" key={index}>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;