import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' ? true : false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH_STATE':
      localStorage.setItem('isAuthenticated', 'true');
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      localStorage.setItem('isAuthenticated', 'false');
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}

// Apply middleware using applyMiddleware
const store = createStore(
  authReducer,
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
