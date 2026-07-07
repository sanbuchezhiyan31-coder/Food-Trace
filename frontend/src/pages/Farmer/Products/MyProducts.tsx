import { useEffect, useState } from "react";
import DashboardLayout from "../../../layouts/DashboardLayout/DashboardLayout";
import { getProducts } from "../../../services/productService";
import "./MyProducts.css";

function MyProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="my-products-page">
        <div className="my-products-header">
          <div>
            <p className="eyebrow">Farmer Dashboard</p>
            <h1>My Products</h1>
            <p className="subtext">Track and review your listed produce.</p>
          </div>
        </div>

        <div className="products-table-card">
          <table className="products-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.product_name}</td>
                  <td>{product.category}</td>
                  <td>
                    {product.quantity} {product.unit}
                  </td>
                  <td>₹{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MyProducts;