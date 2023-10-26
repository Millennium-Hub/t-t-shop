import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Cart({ cartItems, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let finalPrice = 0;
    cartItems.map((item) => (finalPrice += item.price * item.amount));
    setPrice(finalPrice);
  };

  const handleRemove = (id) => {
    const Temparr = cartItems.filter((item) => item.id !== id);
    setCart(Temparr);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="cart-items">
      <div className="cart-title">Cart Items</div>
      {cartItems.length === 0 && (
        <div className="empty-cart">No products added</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div className="cart-list" key={item.id}>
            <p>image</p>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <div>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div>
          <span>Total Product Purchased</span>
          <span>$ - {price}</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
