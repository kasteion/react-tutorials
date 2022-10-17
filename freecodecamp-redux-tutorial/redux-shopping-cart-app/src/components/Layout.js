import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";

const Layout = () => {
  const total = useSelector((state) => {
    const prices = state.cart.itemsList.map((item) => Number(item.totalPrice));
    let totalCount = 0;
    prices.forEach((price) => {
      totalCount = totalCount + price;
    });
    return totalCount;
  });

  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart ? <CartItems /> : null}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
