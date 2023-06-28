import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Add Product",
    path: "/products/add-product",
  },
];

const Header = () => {
  const totalCartCount = useSelector((state) => state.totalCartCount);
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">E-Commerce</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          {navigations.map((naviagation, index) => {
            return (
              <Link
                key={index}
                to={naviagation.path}
                className="mr-5 hover:text-gray-900"
              >
                {naviagation.name}
              </Link>
            );
          })}
        </nav>
        <Link
          to={"/cart"}
          className="flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded relative text-base mt-4 md:mt-0"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-4 pr-2" />
          Go to Cart
          <span
            className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute count"
            style={style.count}
          >
            {totalCartCount} {/* Replace '5' with the actual cart number */}
          </span>
        </Link>
      </div>
    </header>
  );
};

const style = {
  count: {
    top: "-10px",
    right: "0px",
  },
};

export default Header;
