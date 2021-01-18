import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import InputComponent from "../General/InputComponent";
import Button from "react-bootstrap/Button";
import { runLogin } from "../../store/actions/login";
import logo from "../../images/Login-Best-Pizza.png";
import ic_constrasena from "../../images/ic_contrasena.png";
import ic_usuario from "../../images/ic_usuario.png";
import "./style.css";

const LoginComponent = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const validateUser = useSelector((state) => state.validateLogin);
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  useEffect(() => {
    if (validateUser) {
      history.push("/shops");
      if (isLoading) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [validateUser, isLoading]);

  const handleClick = () => {
    dispatch(runLogin({ user, password }));
    setLoading(true);
  };
  return (
    <div id="loginForm">
      <div className="info">
        <img src={logo} className="logo" alt="" />
        <h3>Bienvenido</h3>
        <h4>A las mejores pizzas del país</h4>
      </div>
      <form noValidate autoComplete="off">
        <div className="field">
          <InputComponent
            type="email"
            placeholder="Usuario"
            icon={ic_usuario}
            disabled={isLoading}
            value={user}
            onChange={(value) => setUser(value)}
          />
        </div>
        <div className="field">
          <InputComponent
            type="password"
            placeholder="Contraseña"
            icon={ic_constrasena}
            disabled={isLoading}
            value={password}
            onChange={(value) => setPassword(value)}
          />
        </div>
        <p>¿Olvidaste tu contraseña?</p>
        <div>
          <Button
            variant="primary"
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
          >
            {isLoading ? "Cargando..." : "Iniciar sesión"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginComponent;
