export const ADD_PRODUCTS = "ADD_PRODUCTS";

export function addProducts(products) {
  console.log("action", products);
  return {
    type: ADD_PRODUCTS,
    products,
  };
}
