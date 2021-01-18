import axios from "axios";
import {
  setAlert
} from "./alert"
export const GET_USERS = "GET_USERS";
export const SET_VALIDATE_LOGIN = "SET_VALIDATE_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const setValidate = (payload) => ({
  type: SET_VALIDATE_LOGIN,
  payload,
});
export const setLogout = (payload) => ({
  type: SET_LOGOUT,
  payload,
});
export const getListUsers = async () => {
  return await axios
    .get(`${process.env.REACT_APP_URL_API}`)
    .then((data) => {
      const {
        users
      } = data.data.response;
      return users;
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
};
export const runLogin = payload => {
  return async dispatch => {
    const users = await getListUsers();
    const userFound = users.find((element) => element.email == payload.user);
    if (userFound && userFound.password == payload.password) {
      dispatch(setValidate(true));
    } else {
      dispatch(setAlert({
        status: true,
        message: {
          title: "Error",
          description: "Usuario o contraseña invalidos"
        },
        code: "danger"
      }));
      dispatch(setValidate(false));
    }
  };
};