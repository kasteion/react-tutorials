import { createSlice } from "@reduxjs/toolkit";
// import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload;
      state.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      // Check if item is already there
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      state.changed = true;
      const existingItem = state.itemsList.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity--;
      }
      if (existingItem.quantity === 0) {
        state.itemsList = state.itemsList.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    toogleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

// export const sendCartData = (cart) => {
//   const sendRequest = async () => {
//     const res = await fetch(
//       `https://redux-http-bc782-default-rtdb.firebase.io.com/cartItems.json`,
//       {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       }
//     );
//     const data = await res.json();
//   };

//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         open: true,
//         message: "Sending Request",
//         type: "warning",
//       })
//     );
//     try {
//       await sendRequest();
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           open: true,
//           message: "Sending request failed",
//           type: "error",
//         })
//       );
//     }
//   };
// };

export const cartActions = cartSlice.actions;

export default cartSlice;
