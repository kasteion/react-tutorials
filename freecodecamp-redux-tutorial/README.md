# Basic Terms

## Redux

A Complex State Management Tool with a single stor as CDS (Central Data Store). To manage compex state and manage the whole state in a single data store.

## Reducers

Manages the State and Returns the newly updated state.

## Actions

Actions have 2 properties type: which is a unique identifier and payload which has data.

## Dispatch

Dispatch is used to send actions to update the data.

# Counter App With React-Redux

1. Create a react app

> yarn create react-app react-redux

> cd react-redux

2. Install the redux and react-redux dependencies

> yarn add redux react-redux

3. Create a store:

> mkdir src/store

> touch src/store/index.js

```js
import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  return state;
};

const store = createStore(reducerFn);

export default store;
```

4. Envelope our application in the store, using the Provider that comes from react-redux

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

5. Use the state that comes from the store in our App file (or the component):

```js
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
```

6. Add buttons to change the state

```js
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" });
  };

  const decrement = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
```

7. Modify the reducer function to return a different state depending on the action that is being dispatched.

```js
import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  // Should be a Synchronous function
  // We should not mutate the original state

  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducerFn);

export default store;
```

# Using Redux Toolkit

To use the redux toolkit we need to:

1. Create a react app

> yarn create react-app react-redux-toolkit

> cd react-readux-toolkit

2. Install the dependencies

> yarn add @reduxjs/toolkit react-redux

3. Create a store

> mkdir src/store

> touch src/store/index.js

# Shopping Cart Project - Introduction

https://github.com/Nikhilthadani/Redux-Shopping-Cart-App/tree/StartingApp

# Shopping Cart Project - Auth Slice State

1. We create a auth slice in src/store/auth-slice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
```

2. We create the store in src/store/index.js

```js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
```

3. We use the provide in the index.js of the app

```js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

4. We use the useSelector hook in the App.js

```js
import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return <div className="App">{!isLoggedIn ? <Auth /> : <Layout />}</div>;
}

export default App;
```

5. We use the useDispatch hook in the Auth

```js
import React from "react";

import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
```

# Shopping Cart Project - Cart Slice State

1. Create a cart-slice in src/store/cart-slice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
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
    removeFromCart(state, action) {},
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
```

2. Add the cart slice to the store

```js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
```

3. useDispatch and the cart Actions in Product component

```js
import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, price, name }));
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
```

4. useSelector in Cart component

```js
import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="cartIcon">
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
```

# Incrementing and Decrementing items from Cart

# Adding Logout State

# Using Firebase with Redux

The functions in the reducers must be synchronous, we can not use asynchronous calls like a fetch or a call to an api.

We have to options for the async call:

1. Inside the components with the useEffect hook
2. Create an action creator that will allow us to run the async call

To setup firebase:

1. Create a new firebase project
2. Go to Build --> Reatime Database --> Enable

The rules should be read and write to true

# Sending asynchronous HTTP Requests with Redux

**1. Inside the component with the useEffect hook**

```js
import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  // We add a selector to all data in the cart
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Every time the data in the cart changes the useEffect gets executed and the request to the server gets sent.
  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        `https://redux-http-bc782-default-rtdb.firebase.io.com/cartItems.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
    };
    sendRequest();
  }, [cart]);
  return <div className="App">{!isLoggedIn ? <Auth /> : <Layout />}</div>;
}

export default App;
```

# Adding Notifications with Material UI

> npm install @mui/material @emotion/react @emotion/styled

Create a Notification component

```js
import React from "react";
import { Alert } from "@mui/material";

function Notification({ type, message }) {
  return (
    <div>
      <Alert severity={type}>{message}</Alert>
    </div>
  );
}

export default Notification;
```

## Adding Notification Slice State

1. We create a slice named ui-slice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: null },
  reducers: {
    showNOtification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
```

2. We add the ui-slice to the store

```js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
```

3. We have to have a useDispatch in App.js to handle this ui slice

```js
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
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      // Send state = sending request
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request",
          type: "warning",
        })
      );
      const res = await fetch(
        `https://redux-http-bc782-default-rtdb.firebase.io.com/cartItems.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      // Send state = request is succesful
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent request to database successfully",
          type: "sucess",
        })
      );
    };
    sendRequest().catch((err) => {
      // Send state = error
      uiActions.showNotification({
        open: true,
        message: "Sending request failed",
        type: "error",
      });
    });
  }, [cart]);

  return (
    <div className="App">
      <Notification type={notification.type} message={notification.message} />
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
```

# Using Redux Thunk Pattern

**Action - Creator**

A Thunk is a function that creates an action and a creator.

# Creating Thunk Pattern with Redux And Sending GEt HTTP request with Redux

1. We create the action-creator function in the cart-actions.js
   (A function that receives a dispatch an returns an action)

```js
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
```

2. The components are cleaner like this

```js
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
```
