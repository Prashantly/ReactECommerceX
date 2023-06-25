import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import products from "./states/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(products);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Flip}
      theme="colored"
    />
  </Provider>
);
