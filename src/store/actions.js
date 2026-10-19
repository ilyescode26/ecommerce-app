// ---- Redux Actions ----
// An action is a plain object that describes WHAT happened.
// Action creators are small functions that build these objects.

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QTY = 'INCREASE_QTY';
export const DECREASE_QTY = 'DECREASE_QTY';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const increaseQty = (id) => ({ type: INCREASE_QTY, payload: id });
export const decreaseQty = (id) => ({ type: DECREASE_QTY, payload: id });
export const clearCart = () => ({ type: CLEAR_CART });
