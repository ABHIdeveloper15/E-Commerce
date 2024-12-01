import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

const CartPage = () => {
  const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.images[0]} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>${item.price}</p>
            </div>
            <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPage;

