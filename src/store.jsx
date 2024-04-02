// store.js
import { createStore } from 'redux';

// Define initial state
const initialState = {
    auth: {
        isAuthenticated: false,
        // Other authentication related properties...
      },
};

// Define reducer function
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH_STATE':
        return { ...state, auth: { ...state.auth, isAuthenticated: action.payload } };
    // Other cases for handling other actions...
    default:
      return state;
  }
}

// Create Redux store with optional preloaded state
const store = createStore(rootReducer, initialState);

export default store;
