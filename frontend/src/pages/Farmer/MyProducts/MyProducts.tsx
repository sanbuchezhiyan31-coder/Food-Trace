import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getProducts, deleteProduct } from "../../../services/productService";
import "./MyProducts.css";

function MyProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await deleteProduct(id);
      loadProducts();
      alert("Product deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  return (
    <DashboardLayout>
      <div className="products-page">
        <div className="page-header">
          <h1>🌾 My Products</h1>
        </div>

        <div className="table-card">
          <table className="products-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Harvest Date</th>
                <th>Status</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="empty">
                    Loading products...
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan={8} className="empty">
                    No products found yet. Add your first product to begin tracking inventory.
                  </td>
                </tr>
              ) : (
                products.map((product: any) => (
                  <tr key={product.id}>
                    <td>{product.product_name}</td>
                    <td>{product.category}</td>
                    <td>
                      {product.quantity} {product.unit}
                    </td>
                    <td>₹{product.price}</td>
                    <td>{product.harvest_date}</td>
                    <td>
                      <span className="status">Available</span>
                    </td>
                    <td>
                      <img
                        src={`http://127.0.0.1:8000${product.image}`}
                        alt={product.product_name}
                        width="70"
                      />
                    </td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => navigate(`/farmer/edit-product/${product.id}`)}
                      >
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDelete(product.id)}>
                        Delete
                      </button>
                    </td>
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

export default MyProducts;
