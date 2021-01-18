import { combineReducers } from "redux";
import { listShops } from "./shops_reducer";
import { validateLogin, users } from "./login_reducer";
import { alert } from "./alert_reducer";

const appReducer = combineReducers({
  listShops,
  validateLogin,
  users,
  alert,
});
const rootReducer = (state, action) => {
  if (action.type === "SET_LOGOUT") {
    state = {
      validateLogin: false,
      users: null,
      listShops: null,
      alert: {
        status: false,
        message: null,
        code: null,
      },
    };
  }
  return appReducer(state, action);
};
export default rootReducer;
