import React from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Products = () => {
  const products = useSelector((state) => {
    return state.products;
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => {
            console.log("product", product);

            const { id, title, price, thumbnail, rating, category } = product;

            return (
              <div
                key={id}
                className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md cursor-pointer"
              >
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={thumbnail}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1">${price}</p>
                  <div className="flex mt-2">
                    {
                      <Rating
                        name="half-rating"
                        defaultValue={rating}
                        precision={0.5}
                      />
                    }
                  </div>
                  <div className="flex mt-2 justify-end">
                    <button className="mr-2">
                      <EditIcon />
                    </button>
                    <button>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
