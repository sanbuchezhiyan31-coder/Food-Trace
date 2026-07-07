import "./FeaturedProducts.css";

const products = [
  {
    name: "Farm Fresh Tomato",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400",
    price: "₹40/kg",
    badge: "Traceable",
  },
  {
    name: "Organic Potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
    price: "₹30/kg",
    badge: "Verified",
  },
  {
    name: "Premium Onion",
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400",
    price: "₹35/kg",
    badge: "Cold Chain",
  },
  {
    name: "Crunchy Carrot",
    image: "https://images.unsplash.com/photo-1447175008436-170170753d52?w=400",
    price: "₹50/kg",
    badge: "Fresh Today",
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <p>Trusted produce with transparent sourcing and real-time supply visibility.</p>

      <div className="product-grid">
        {products.map((product, index) => (
          <article className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="product-card-body">
              <span className="product-badge">{product.badge}</span>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button type="button">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;