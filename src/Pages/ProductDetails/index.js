import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../../apiConfig";
import customFetch from "../../api";
import { Rating } from "@mui/material";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      console.log(`${API_BASE_URL}/products/${id}`);
      const data = await customFetch(`${API_BASE_URL}/products/${id}`, {
        method: "GET",
      });
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  //if product key array length is not greter than 0 return product not found
  if (Object.keys(product).length === 0) {
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Product not found...
            </h1>
          </div>
        </div>
      </section>
    );
  }

  console.log("product", product);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap items-center mt-10">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
            <img
              alt={product?.title}
              className="lg:w-1/1 w-full lg:h-auto max-h-[470px] object-contain object-center rounded"
              src={product?.thumbnail}
            />
            <div className="flex mt-4">
              {product?.images.slice(0, 4).map((image, index) => (
                <img
                  alt="ecommerce"
                  key={index}
                  className="lg:w-1/4 w-full lg:h-auto object-contain object-center rounded ml-2"
                  src={image}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {
                  <Rating
                    name="half-rating"
                    defaultValue={product?.rating} // Use the rating state as the value
                    precision={0.5}
                  />
                }
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price}
              </span>
              <div className="flex ">
                <button className="flex ml-auto mr-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy it now
                </button>
                <button className="flex ml-auto text-dark border border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-white rounded">
                  Add to cart
                </button>
              </div>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;