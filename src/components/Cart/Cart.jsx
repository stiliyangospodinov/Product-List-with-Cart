import React from 'react';

const Cart = ({ cart, removeItemFromCart, confirmOrder }) => {

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  if (totalQuantity === 0) {
    return (
      <div className="cart empty-cart">
        <h2>Your Cart ({totalQuantity})</h2>
        <img
          src="./assets/images/illustration-empty-cart.svg"
          alt=""
          className="empty-cart-img"
        />
        <p>Your added items will appear here</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart ({totalQuantity})</h2>
      <ul>
        {cart.map((item) => {

          const totalPriceOfItem = item.quantity * item.price;

          return (

            <li key={item.name}>
              <div className="cart-item">
                <span className="item-details">
                  <span>{item.name}</span>
                  <span className="item-quantity-price">
                    <span>{item.quantity}x</span> @ $ {item.price.toFixed(2)}     <span>${totalPriceOfItem.toFixed(2)}</span>
                  </span>
                </span>
                <button
                  className="remove-btn"
                  onClick={() => removeItemFromCart(item)}
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-footer">
        <div className="order-total">
          <span>Order Total</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <p className="carbon-neutral">
          <img src="./assets/images/icon-carbon-neutral.svg"></img>
          This is a <strong>carbon-neutral</strong> delivery</p>
        <button className="confirm-order-btn" onClick={confirmOrder} >Confirm Order</button>
      </div>
    </div>
  );
};

export default Cart;
