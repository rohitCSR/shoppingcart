import {
  SET_PRODUCT,
  SELECTED_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM,
} from '../constants/action-types';

export const setProduct = (products) => {
  return {
    type: SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const adjustQuantity = (itemId, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item,
  };
};
