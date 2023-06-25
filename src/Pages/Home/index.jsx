import Hero from "../../components/Hero";
import ProductCard from "../../components/ProductCard";
import Sort from "../../components/Sort";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      <Hero />
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xm text-indigo-500 tracking-widest font-medium title-font mb-1">
          PRODUCTS
        </h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          MOST POPULAR PRODUCTS
        </h1>
      </div>
      <Sort />

      {isLoading ? (
        <div className="flex justify-center">
          <CircularProgress />
        </div>
      ) : (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap m-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
