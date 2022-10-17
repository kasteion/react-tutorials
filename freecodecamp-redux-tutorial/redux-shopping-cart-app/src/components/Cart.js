import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const toogleShowCart = () => {
    dispatch(cartActions.toogleShowCart());
  };
  return (
    <div className="cartIcon" onClick={toogleShowCart}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
