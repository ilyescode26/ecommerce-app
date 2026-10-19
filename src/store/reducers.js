import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  CLEAR_CART,
} from './actions';

// ---- Redux Reducer ----
// A reducer is a pure function: (currentState, action) => newState.
// It never mutates the old state, it always returns a new object.

const initialState = {
  items: [], // each item: { id, title, price, emoji, qty }
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        // Product already in cart -> increase its quantity.
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }

      return { ...state, items: [...state.items, { ...product, qty: 1 }] };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case INCREASE_QTY:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case DECREASE_QTY:
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0),
      };

    case CLEAR_CART:
      return { ...state, items: [] };

    default:
      return state;
  }
}

export default cartReducer;
