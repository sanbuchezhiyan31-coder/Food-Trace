import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "24px" }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Details page coming soon.</p>
    </div>
  );
}

export default ProductDetails;
