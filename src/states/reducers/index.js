import { ADD_PRODUCTS, SET_LOADING, ADD_TO_CART } from "../actions";

let initialState = {
  products: [],
  isLoading: false,
  cart: [],
  // totalCart: 0,
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

    case ADD_TO_CART:
      let updatedCart = state.cart.map((item) => {
        if (item.id === action.item.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      const isNewProduct =
        state.cart.find((item) => item.id === action.item.id) === undefined;
      if (isNewProduct) {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      } else {
        return {
          ...state,
          cart: updatedCart,
        };
      }

    default:
      return state;
  }
}
