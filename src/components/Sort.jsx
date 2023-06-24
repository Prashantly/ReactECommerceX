import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../states/actions";

const Sort = () => {
  const [flag, setFlag] = useState(false);
  //get products from stoe
  const products = useSelector((state) => state.products);
  const dispatchSort = useDispatch();
  const dispatchCanel = useDispatch();

  // handle sort function
  const handleSort = () => {
    //sort products
    let sortedData = products.sort((a, b) => a.price - b.price);

    // dispatch sortedData
    dispatchSort(addProducts([...sortedData]));
    setFlag(true);
  };

  // handle sort function
  const cancelSort = () => {
    //remove sort
    let products = JSON.parse(window.localStorage.getItem("products"));
    dispatchCanel(addProducts([...products]));
    setFlag(false);
  };

  return (
    <div className="flex justify-end mr-16">
      <div className="bg-white p-2 rounded-5 flex justify-around" style={style}>
        <span className="font-bold" onClick={() => handleSort()}>
          Sort by Price
        </span>
        {flag && (
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561189.png"
              alt="error"
              width={"20rem"}
              onClick={() => cancelSort()}
              style={{ cursor: "pointer" }}
            />
          </span>
        )}
      </div>
    </div>
  );
};

const style = {
  width: "9rem",
  cursor: "pointer",
};

export default Sort;
