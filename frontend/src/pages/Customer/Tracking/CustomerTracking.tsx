import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getProducts } from "../../../services/productService";
import { getTracking } from "../../../services/trackingService";
import "./CustomerTracking.css";

type Product = {
  id: number;
  product_name: string;
  category: string;
};

type TrackingEntry = {
  id: number;
  product: number;
  status: string;
  location: string;
  updated_at: string;
};

function CustomerTracking() {
  const [products, setProducts] = useState<Product[]>([]);
  const [tracking, setTracking] = useState<TrackingEntry[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([getProducts(), getTracking()])
      .then(([productsRes, trackingRes]) => {
        setProducts(productsRes.data);
        setTracking(trackingRes.data);
      })
      .catch(() => setError("Could not load tracking data. Is the backend running?"))
      .finally(() => setLoading(false));
  }, []);

  const history = tracking
    .filter((t) => t.product === selectedProduct)
    .sort(
      (a, b) =>
        new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime()
    );

  return (
    <DashboardLayout>
      <div className="customer-tracking">
        <h1>Track a Product</h1>

        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && (
          <>
            <select
              className="product-select"
              value={selectedProduct ?? ""}
              onChange={(e) => setSelectedProduct(Number(e.target.value))}
            >
              <option value="" disabled>
                Select a product...
              </option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.product_name} ({p.category})
                </option>
              ))}
            </select>

            {selectedProduct && history.length === 0 && (
              <p>No tracking history yet for this product.</p>
            )}

            <div className="timeline">
              {history.map((entry, index) => (
                <div className="timeline-item" key={entry.id}>
                  <div className="timeline-marker">{index + 1}</div>
                  <div className="timeline-content">
                    <h4>{entry.status}</h4>
                    <p>{entry.location}</p>
                    <span className="timeline-date">
                      {new Date(entry.updated_at).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default CustomerTracking;
