import { ADD_PRODUCTS } from "../actions";

let initialState = {
  products: [],
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
}
