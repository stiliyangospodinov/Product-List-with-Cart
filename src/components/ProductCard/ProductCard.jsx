import React from 'react';
import { useMediaQuery } from 'react-responsive';

const ProductCard = ({ product, addToCart, decreaseQuantity, cart }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const cartItem = cart.find((item) => item.name === product.name);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={`product-card ${quantity > 0 ? 'highlighted' : ''}`}>
      <img
        src={isMobile ? product.image.mobile : product.image.desktop}
        alt={product.name}
      />
      <div className="btn">
        {quantity > 0 ? (
          <div className="quantity-btn">
  <button
    className="circle-btn"
    onClick={() => decreaseQuantity(product)}
  >
    -
  </button>
  <span className="quantity-text">{quantity}</span>
  <button
    className="circle-btn"
    onClick={() => addToCart(product)}
  >
    +
  </button>
</div>
        ) : (
          <button
            onClick={() => addToCart(product)} 
            className="add-to-cart-btn"
          >
            <img src="./assets/images/icon-add-to-cart.svg" alt="Add to cart" /> Add to Cart
          </button>
        )}
      </div>
      <h4>{product.category}</h4>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
