import Home from "../Pages/Home";
import React, { useEffect } from "react";
import Header from "./Header";
import customFetch from "../../api";
import API_BASE_URL from "../../apiConfig";

function App() {
  //fetch products using useEffetct
  useEffect(() => {
    const fetchData = async () => {
      console.log(`${API_BASE_URL}/products`);
      const products = await customFetch(`${API_BASE_URL}/products`, {
        method: "GET",
      });
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
