import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { loadState, saveState } from "./localstorage";
const initialState = loadState() || {
  validateLogin: false,
  users: null,
  listShops: null,
  alert: {
    status: false,
    message: null,
    code: null,
  },
};
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
store.subscribe(() => saveState(store.getState()));
export default store;
