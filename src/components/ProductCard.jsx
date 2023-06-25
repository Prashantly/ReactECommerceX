import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import API_BASE_URL from "../apiConfig";
import customFetch from "../api";
import Rating from "@mui/material/Rating";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { addProducts } from "../states/actions";

const ProductCard = ({ product }) => {
  const products = useSelector((state) => {
    return state.products;
  });
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(product.title);
  const [editedPrice, setEditedPrice] = useState(product.price);
  const [editedRating, setEditedRating] = useState(product.rating);
  const [editedCategory, setEditedCategory] = useState(product.category);
  const dispatchProduct = useDispatch();

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    const updatedProduct = {
      title: editedTitle,
      price: editedPrice,
      rating: editedRating,
      category: editedCategory,
    };

    toast
      .promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(
              customFetch(`${API_BASE_URL}/products/${product.id}`, {
                method: "PUT",
                body: {
                  ...product,
                  ...updatedProduct,
                },
              })
            );
          }, 3000);
        }),
        {
          pending: "Saving product...",
          success: "Product saved successfully 👌",
          error: "Failed to save product 🤯",
        }
      )
      .then((response) => {
        console.log(response);
        // i got response as updated product now i need to update that in products arrys which is stored in redux store
        let index = products.indexOf(product);

        products[index] = response;

        dispatchProduct(addProducts([...products]));

        setEditMode(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteProduct = async () => {
    try {
      let url = `${API_BASE_URL}/products/${product.id}`;

      await customFetch(url, {
        method: "DELETE",
      });

      let index = products.indexOf(product);
      products.splice(index, 1);
      dispatchProduct(addProducts([...products]));
      toast.success("You deleted the item successfully!!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete the given item");
    }
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handlePriceChange = (event) => {
    setEditedPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setEditedCategory(event.target.value);
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
      <Link
        to={`/products/${product.id}`}
        className="block relative h-48 rounded overflow-hidden cursor-pointer"
      >
        <img
          alt={product.title}
          className="object-fit object-center w-full h-full block"
          src={product.thumbnail}
        />
      </Link>
      <div className="mt-4">
        {editMode ? (
          <>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
              <input
                type="text"
                value={editedCategory}
                onChange={handleCategoryChange}
              />
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
              />
            </h2>
            <p className="mt-1">
              <input
                type="text"
                value={editedPrice}
                onChange={handlePriceChange}
              />
            </p>
            <div className="flex mt-2">
              <input
                type="number"
                max={"5"}
                min={"0"}
                value={editedRating}
                step={"0.5"}
                onChange={(e) => setEditedRating(e.target.value)}
              />
            </div>
            <div className="flex mt-2 justify-end">
              <button className="mr-2">
                <SaveIcon onClick={handleSave} />
              </button>
              <button>
                <CancelIcon onClick={handleEdit} />
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
              {product.category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.title}
            </h2>
            <p className="mt-1">${product.price}</p>
            <div className="flex mt-2">
              <Rating
                name="half-rating"
                value={parseFloat(editedRating)}
                precision={0.5}
              />
            </div>
            <div className="flex mt-2 justify-end">
              <button className="mr-2">
                <EditIcon onClick={handleEdit} />
              </button>
              <button>
                <DeleteIcon onClick={handleDeleteProduct} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
