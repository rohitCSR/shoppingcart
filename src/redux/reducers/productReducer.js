import {
  SET_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
} from '../constants/action-types';

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      // get the items data from product array
      const item = state.products.find((prod) => prod.id === action.payload.id);
      // check if item is in cart alrady
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
