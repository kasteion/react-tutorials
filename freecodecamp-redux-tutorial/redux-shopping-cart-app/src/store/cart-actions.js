import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const getCardData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-bc782-default-rtdb.firebase.io.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-http-bc782-default-rtdb.firebase.io.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending request failed",
          type: "error",
        })
      );
    }
  };
};
