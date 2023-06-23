import Home from "../Pages/Home";
import React, { useEffect } from "react";
import Header from "./Header";
import customFetch from "../api";
import API_BASE_URL from "../apiConfig";
import { useDispatch } from "react-redux";
import { addProducts } from "../states/actions";

function App() {
  const dispatch = useDispatch();
  //fetch products using useEffetct
  useEffect(() => {
    const fetchData = async () => {
      console.log(`${API_BASE_URL}/products`);
      const products = await customFetch(`${API_BASE_URL}/products`, {
        method: "GET",
      });

      // console.log(products);
      dispatch(addProducts(products));
    };

    fetchData();
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
