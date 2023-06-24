export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SET_LOADING = "SET_LOADING";

export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

export function setLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading,
  };
}
