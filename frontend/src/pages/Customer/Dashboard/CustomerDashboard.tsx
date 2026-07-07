import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import "./CustomerDashboard.css";

function CustomerDashboard() {
  return (
    <DashboardLayout>
      <div className="customer-dashboard">
        <h1>Welcome Customer 👋</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search Products..." />
        </div>
        <div className="category-grid">
          <div className="category-card">🥬 Vegetables</div>
          <div className="category-card">🍎 Fruits</div>
          <div className="category-card">🌾 Grains</div>
          <div className="category-card">🌶 Spices</div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CustomerDashboard;
