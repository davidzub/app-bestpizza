import { GET_SHOPS } from "../actions/shops";
export const listShops = (state = {}, action) => {
  switch (action.type) {
    case GET_SHOPS:
        return action.payload
    default:
      return state;
  }
};
