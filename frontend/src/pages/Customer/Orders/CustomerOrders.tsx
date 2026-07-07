import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getOrders } from "../../../services/orderService";
import "./CustomerOrders.css";

type Order = {
  id: number;
  quantity: number;
  total_price: string;
  order_date: string;
  delivery_status: string;
  product_detail: {
    product_name: string;
    category: string;
    unit: string;
  };
};

const statusColors: Record<string, string> = {
  Pending: "#f39c12",
  Confirmed: "#2980b9",
  Packed: "#8e44ad",
  Shipped: "#16a085",
  Delivered: "#27ae60",
  Cancelled: "#c0392b",
};

function CustomerOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getOrders()
      .then((res) => setOrders(res.data))
      .catch(() => setError("Could not load orders. Is the backend running?"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DashboardLayout>
      <div className="customer-orders">
        <h1>My Orders</h1>

        {loading && <p>Loading orders...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && orders.length === 0 && (
          <p>You haven't placed any orders yet.</p>
        )}

        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <div className="order-main">
                <h3>{order.product_detail?.product_name}</h3>
                <p>
                  {order.quantity} {order.product_detail?.unit} &middot; ₹
                  {order.total_price}
                </p>
                <p className="order-date">
                  Ordered on {new Date(order.order_date).toLocaleDateString()}
                </p>
              </div>
              <span
                className="status-badge"
                style={{
                  backgroundColor:
                    statusColors[order.delivery_status] || "#7f8c8d",
                }}
              >
                {order.delivery_status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CustomerOrders;
