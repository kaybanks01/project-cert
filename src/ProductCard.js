import React, { useContext } from "react";
import { CartContext } from "./CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={`http://localhost:8000/api/file/${product.image}`} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p>{product.productDescription}</p>
      <p>
        Price: <s>${product.price}</s> <strong>${product.discountPrice}</strong>
      </p>
      <button className="btn add-cart-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
