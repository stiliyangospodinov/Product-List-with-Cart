import React from 'react';
import ProductCard from '.././ProductCard/ProductCard';

const ProductList = ({ products, addToCart, decreaseQuantity, cart  }) => {
  return (
    <div className="product-list">
        {products.map((product) => (
          <ProductCard 
          key={product.name} 
          product={product} 
          addToCart={addToCart} 
          decreaseQuantity={decreaseQuantity} 
          cart={cart} />
        ))}
    </div>
  );
};

export default ProductList;
