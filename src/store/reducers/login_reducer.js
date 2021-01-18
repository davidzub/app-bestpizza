import { SET_VALIDATE_LOGIN } from "../actions/login";
import { GET_USERS } from "../actions/login";
export const validateLogin = (state = {}, action) => {
  switch (action.type) {
    case SET_VALIDATE_LOGIN:
      return action.payload;
    default:
      return state;
  }
};
export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};
