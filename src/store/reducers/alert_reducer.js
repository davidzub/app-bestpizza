import { SET_ALERT } from "../actions/alert";
export const alert = (state = {}, action) => {
  switch (action.type) {
    case SET_ALERT:
      const { status, message, code } = action.payload;
      return {
        ...state,
        alert: {
          status,
          message,
          code,
        },
      };
    default:
      return state;
  }
};
