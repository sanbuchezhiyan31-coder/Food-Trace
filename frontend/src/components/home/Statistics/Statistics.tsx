import "./Statistics.css";
import {
  FaUsers,
  FaLeaf,
  FaShoppingCart,
  FaTruck,
} from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      icon: <FaUsers />,
      number: "500+",
      title: "Registered Farmers",
    },
    {
      icon: <FaLeaf />,
      number: "10,000+",
      title: "Fresh Products",
    },
    {
      icon: <FaShoppingCart />,
      number: "50,000+",
      title: "Orders Delivered",
    },
    {
      icon: <FaTruck />,
      number: "250+",
      title: "Distribution Partners",
    },
  ];

  return (
    <section className="statistics">
      <h2>Platform Statistics</h2>

      <div className="statistics-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.number}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;