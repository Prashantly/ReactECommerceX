import { ADD_PRODUCTS, SET_LOADING } from "../actions";

let initialState = {
  products: [],
  isLoading: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
