import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers';

// ---- Redux Store ----
// The store holds the global state of the application.
// Any component connected with react-redux can read from it,
// and can change it only by dispatching an action.

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
