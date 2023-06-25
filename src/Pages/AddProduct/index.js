import React, { useState } from "react";
import API_BASE_URL from "../../apiConfig";
import customFetch from "../../api";
import { useNavigate } from "react-router-dom";
import { addProducts } from "../../states/actions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const containerStyles = {
  width: "50%",
  margin: "auto",
  backgroundColor: "#3A3B3C",
  marginTop: "5rem",
  paddingTop: "2rem",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

if (window.innerWidth <= 976) {
  containerStyles.width = "90%";
}

if (window.innerWidth <= 576) {
  containerStyles.width = "100%";
  containerStyles.margin = "0";
}

const AddProduct = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState();
  const [brand, setBrand] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `${API_BASE_URL}/products`;
    let data = {
      id: Date.now(),
      title,
      category,
      description,
      price,
      rating,
      brand,
      thumbnail,
    };

    try {
      let result = await customFetch(url, {
        method: "POST",
        body: data,
      });

      if (result) {
        dispatch(addProducts([result, ...products]));
        navigate("/");
      }

      toast.success("Product has been added successfully!!");
      setTitle("");
      setCategory("");
      setDescription("");
      setPrice("");
      setRating("");
      setBrand("");
      setThumbnail("");
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred while adding the product. Please try again later."
      );
    }
  };
  return (
    <div
      id="container"
      className="bg-light border border-1 border-dark mt-4 p-3"
      style={containerStyles}
    >
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Descriptions"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Brand name"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          className="p-2"
          placeholder="Thumbnail image Url"
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <input
          type="number"
          className="p-2"
          placeholder="Ratings"
          min={0}
          max={5}
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary self-end mt-4"
          style={{
            width: "7rem",
            backgroundColor: "#ccc",
            padding: "7px",
            borderRadius: "10px",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
