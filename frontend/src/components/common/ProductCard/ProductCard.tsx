import React from "react";

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <button>View Details</button>
    </div>
  );
};

export default ProductCard;