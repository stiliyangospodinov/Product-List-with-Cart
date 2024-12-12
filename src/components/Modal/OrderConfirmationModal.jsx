import React from 'react';
import './OrderConfirmationModal.css';

const OrderConfirmationModal = ({ cart, closeModal }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
            <img src="assets/images/icon-order-confirmed.svg"></img>
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </div>
        <ul className="modal-cart-items">
          {cart.map((item) => (
            <li key={item.name} className="modal-cart-item">
              <img src={item.image.thumbnail} alt="" className="modal-cart-item-img" />
              <div className="modal-cart-item-details">
                <p>{item.name}</p>
                <p><span>{item.quantity}x</span> @ ${item.price.toFixed(2)}</p>
              </div>
              <strong>${(item.quantity * item.price).toFixed(2)}</strong>
            </li>
          ))}
        </ul>
        <div className="modal-footer">
          <div className="modal-total">
            <span>Order Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <button className="modal-close-btn" onClick={closeModal}>
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
