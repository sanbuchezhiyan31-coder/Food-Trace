import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  { label: "Dashboard", path: "/farmer" },
  { label: "Add Product", path: "/farmer/add-product" },
  { label: "My Products", path: "/farmer/products" },
  { label: "Orders", path: "/farmer/orders" },
  { label: "Tracking", path: "/farmer/tracking" },
  { label: "Reports", path: "/farmer/reports" },
  { label: "Profile", path: "/farmer/profile" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">🌱 FarmTrace</div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="sidebar-link">
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button className="logout-btn" type="button">
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;