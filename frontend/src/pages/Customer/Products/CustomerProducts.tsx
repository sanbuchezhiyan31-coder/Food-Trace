import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getProducts } from "../../../services/productService";
import { addOrder } from "../../../services/orderService";
import "./CustomerProducts.css";

type Product = {
  id: number;
  product_name: string;
  category: string;
  quantity: number;
  unit: string;
  price: string;
  harvest_date: string;
};

function CustomerProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [orderingId, setOrderingId] = useState<number | null>(null);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch(() => setError("Could not load products. Is the backend running?"))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["All", "Vegetables", "Fruits", "Grains", "Spices"];

  const filtered = products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesSearch = p.product_name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = async (product: Product) => {
    setOrderingId(product.id);
    try {
      await addOrder({ product: product.id, quantity: 1 });
      alert(`Order placed for ${product.product_name}`);
    } catch {
      alert("Could not place order. Please make sure you are logged in.");
    } finally {
      setOrderingId(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="customer-products">
        <h1>Browse Products</h1>

        <input
          type="text"
          placeholder="Search Products..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="category-filter">
          {categories.map((c) => (
            <button
              key={c}
              className={c === category ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p className="error">{error}</p>}

        <div className="product-grid">
          {filtered.map((p) => (
            <div className="product-card" key={p.id}>
              <h3>{p.product_name}</h3>
              <p className="category-tag">{p.category}</p>
              <p>
                {p.quantity} {p.unit} available
              </p>
              <p className="price">₹{p.price}</p>
              <button
                disabled={orderingId === p.id}
                onClick={() => handleOrder(p)}
              >
                {orderingId === p.id ? "Placing..." : "Order Now"}
              </button>
            </div>
          ))}
        </div>

        {!loading && !error && filtered.length === 0 && (
          <p>No products found.</p>
        )}
      </div>
    </DashboardLayout>
  );
}

export default CustomerProducts;
