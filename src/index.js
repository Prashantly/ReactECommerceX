import React from "react";
import ReactDOM from "react-dom/client";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./components/App";
import products from "./states/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//The key is used to identify the persisted state in the storage(local storage)
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, products);

const store = createStore(persistedReducer);
//The persistStore function is called with the store to create the persistor, which is responsible for persisting and rehydrating the state.
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
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
