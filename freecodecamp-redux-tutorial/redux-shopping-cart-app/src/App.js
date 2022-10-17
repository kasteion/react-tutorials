import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
// import { uiActions } from "./store/ui-slice";
import { getCardData, sendCartData } from "./store/cart-actions";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // useEffect(() => {
  //   if (isFirstRender) {
  //     isFirstRender = false;
  //     return;
  //   }
  //   const sendRequest = async () => {
  //     // Send state = sending request
  //     dispatch(
  //       uiActions.showNotification({
  //         open: true,
  //         message: "Sending Request",
  //         type: "warning",
  //       })
  //     );
  //     const res = await fetch(
  //       `https://redux-http-bc782-default-rtdb.firebase.io.com/cartItems.json`,
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(cart),
  //       }
  //     );
  //     const data = await res.json();
  //     // Send state = request is succesful
  //     dispatch(
  //       uiActions.showNotification({
  //         open: true,
  //         message: "Sent request to database successfully",
  //         type: "sucess",
  //       })
  //     );
  //   };
  //   sendRequest().catch((err) => {
  //     // Send state = error
  //     uiActions.showNotification({
  //       open: true,
  //       message: "Sending request failed",
  //       type: "error",
  //     });
  //   });
  // }, [cart]);

  useEffect(() => {
    dispatch(getCardData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
