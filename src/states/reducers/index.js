import {
  ADD_PRODUCTS,
  SET_LOADING,
  ADD_TO_CART,
  UPDATE_CART,
  TOTAL_CART,
  REMOVE_FROM_CART,
} from "../actions";

let initialState = {
  products: [],
  isLoading: false,
  cart: [],
  totalCartCount: 0,
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

    case UPDATE_CART:
      let index = state.cart.indexOf(action.cartItem);
      let newCartArray;
      if (index !== -1) {
        newCartArray = [...state.cart];
        newCartArray[index] = action.cartItem;
      }

      console.log(state.cart);

      return {
        ...state,
        cart: newCartArray,
      };

    case TOTAL_CART:
      let { cart } = state;
      let total = cart.reduce((total, item) => {
        return (total = total + item.quantity);
      }, 0);

      return {
        ...state,
        totalCartCount: total,
      };

    case REMOVE_FROM_CART:
      let position = state.cart.indexOf(action.cartItem);
      let newCart = [...state.cart];
      newCart.splice(position, 1);
      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
}
