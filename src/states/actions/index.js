export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SET_LOADING = "SET_LOADING";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART = "UPDATE_CART";
export const TOTAL_CART = "TOTAL_CART";

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

export function addToCart(item) {
  console.log(item);
  return {
    type: ADD_TO_CART,
    item,
  };
}

export function updateCart(cartItem) {
  return {
    type: UPDATE_CART,
    cartItem,
  };
}

export function totalCartCount() {
  return {
    type: TOTAL_CART,
  };
}
