import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Pizza from "../../images/pizza.png";
import Logo from "../../images/logo.png";
import "./style.css";
const LeftComponent = () => {
  const validateUser = useSelector((state) => state.validateLogin);
  return (
    <Row>
      <Col xs={12} className="mobile">
        {validateUser ? <img src={Logo} className="Logo" alt="Logo" /> : ""}
      </Col>
      <Col xs={12} align="center">
        <img src={Pizza} className="Pizza" alt="Pizza" />
      </Col>
    </Row>
  );
};

export default LeftComponent;
