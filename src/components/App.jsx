import Home from "../Pages/Home";
import React, { useEffect } from "react";
import Header from "./Header";
import customFetch from "../api";
import API_BASE_URL from "../apiConfig";
import { useDispatch } from "react-redux";
import { addProducts, setLoading } from "../states/actions";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "../Pages/ProductDetails";
import AddProduct from "../Pages/AddProduct";

function App() {
  const dispatch = useDispatch();
  //fetch products using useEffetct
  useEffect(() => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      console.log(`${API_BASE_URL}/products`);
      const products = await customFetch(`${API_BASE_URL}/products`, {
        method: "GET",
      });

      // stote products array in local Storage
      window.localStorage.setItem("products", JSON.stringify(products));

      // console.log(products);
      dispatch(addProducts(products));

      dispatch(setLoading(false));
    };

    fetchData();
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/products/add-product" element={<AddProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
