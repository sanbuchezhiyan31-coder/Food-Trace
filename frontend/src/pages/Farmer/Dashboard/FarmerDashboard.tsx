import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getProducts } from "../../../services/productService";
import "./FarmerDashboard.css";

function FarmerDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const totalInventory = products.reduce((sum, product) => sum + Number(product.quantity || 0), 0);
  const totalRevenue = products.reduce((sum, product) => sum + Number(product.price || 0), 0);
  const pendingOrders = 0;
  const activeShipments = 0;

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="dashboard-page">
        <h1>Farmer Dashboard</h1>
        <div className="stats-grid">
          <div className="stat-card">
            <h2>{products.length}</h2>
            <p>Total Products</p>
          </div>
          <div className="stat-card">
            <h2>{totalInventory}</h2>
            <p>Inventory Units</p>
          </div>
          <div className="stat-card">
            <h2>{pendingOrders}</h2>
            <p>Pending Orders</p>
          </div>
          <div className="stat-card balance-card">
            <h2>₹{totalRevenue.toLocaleString()}</h2>
            <p>Available Balance</p>
          </div>
        </div>

        <div className="insight-card">
          <div>
            <p className="insight-label">Today’s Snapshot</p>
            <h3>{activeShipments} active shipments and {products.length} products listed</h3>
          </div>
          <span className="insight-pill">Healthy Performance</span>
        </div>

        <div className="recent-products">
          <h2>Recent Products</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={3}>Loading products…</td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={3}>No products available yet. Add your first product to get started.</td>
                </tr>
              ) : (
                products.map((product: any) => (
                  <tr key={product.id}>
                    <td>{product.product_name}</td>
                    <td>{product.category}</td>
                    <td>₹{product.price}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default FarmerDashboard;