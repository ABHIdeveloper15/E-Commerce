import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
