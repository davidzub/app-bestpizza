import React from "react";
import ic_constrasena from "../../images/ic_contrasena.png";
import { useDispatch } from "react-redux";
import { setLogout } from "../../store/actions/login";
import "./styles.css";

const LogoutComponent = () => {
  const dispatch = useDispatch();
  return (
    <div className="logout" onClick={() => dispatch(setLogout())}>
      <img src={ic_constrasena} alt="" /> <span>Salir</span>{" "}
    </div>
  );
};
export default LogoutComponent;
