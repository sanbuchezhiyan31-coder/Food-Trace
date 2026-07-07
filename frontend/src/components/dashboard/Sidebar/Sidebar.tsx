import "./Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const menuItemsByRole: Record<string, { label: string; path: string }[]> = {
  farmer: [
    { label: "Dashboard", path: "/farmer" },
    { label: "Add Product", path: "/farmer/add-product" },
    { label: "My Products", path: "/farmer/products" },
    { label: "Orders", path: "/farmer/orders" },
    { label: "Tracking", path: "/farmer/tracking" },
    { label: "Reports", path: "/farmer/reports" },
    { label: "Profile", path: "/farmer/profile" },
  ],
  customer: [
    { label: "Dashboard", path: "/customer" },
    { label: "Products", path: "/customer/products" },
    { label: "Orders", path: "/customer/orders" },
    { label: "Tracking", path: "/customer/tracking" },
    { label: "Profile", path: "/customer/profile" },
  ],
  distributor: [
    { label: "Dashboard", path: "/distributor" },
    { label: "Orders", path: "/distributor/orders" },
    { label: "Tracking", path: "/distributor/tracking" },
    { label: "Profile", path: "/distributor/profile" },
  ],
  retailer: [
    { label: "Dashboard", path: "/retailer" },
    { label: "Orders", path: "/retailer/orders" },
    { label: "Tracking", path: "/retailer/tracking" },
    { label: "Profile", path: "/retailer/profile" },
  ],
  admin: [
    { label: "Dashboard", path: "/admin" },
    { label: "Users", path: "/admin/users" },
    { label: "Products", path: "/admin/products" },
    { label: "Reports", path: "/admin/reports" },
  ],
};

function Sidebar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role") || "customer";
  const menuItems = menuItemsByRole[role] ?? menuItemsByRole.customer;

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    navigate("/login");
  };

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

      <button className="logout-btn" type="button" onClick={handleLogout}>
        <FaSignOutAlt />
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;