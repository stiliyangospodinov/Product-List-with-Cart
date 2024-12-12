import React, { useEffect, useState } from 'react';
import { fetchProducts } from './service/dataService';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import './App.css';
import OrderConfirmationModal from './components/Modal/OrderConfirmationModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };
    loadProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItemFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
  };

  const clearCart = () => {
    setCart([]);
  };

  const confirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  const closeModal = () => {
    clearCart();
    setIsOrderConfirmed(false);
  };

  return (
    <div className="app">
      <h1>Deeserts</h1>
      <div className="main-container">
      <ProductList products={products} addToCart={addToCart} decreaseQuantity={decreaseQuantity} cart={cart} />
        <Cart cart={cart} removeItemFromCart={removeItemFromCart} confirmOrder={confirmOrder} />
      </div>
      {isOrderConfirmed && <OrderConfirmationModal cart={cart} closeModal={closeModal} />}
    </div>
  );
};

export default App;
