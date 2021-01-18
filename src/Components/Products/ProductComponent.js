import React from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../General/CardComponent";
import panos_pizza from "../../images/products/panos_pizza_1.png";
import camion_pizza from "../../images/products/pizzeria_camion_pizza.png";
import sbarro_pizza from "../../images/products/sbarro_pizza.png";
import stroller_pizza from "../../images/products/stroller_pizza_1.png";
import trulli_pizza from "../../images/products/trulli_pizza.png";
import vogliadipizza_pizza from "../../images/products/vogliadipizza_pizza.png";
const images = [
  panos_pizza,
  camion_pizza,
  sbarro_pizza,
  stroller_pizza,
  trulli_pizza,
  vogliadipizza_pizza,
];
const ProductComponent = ({ products }) => {
  return (
    <Row>
      <Col md={12} lg={8} xs={12}>
        <Row>
          {products.map((product) => (
            <Col md={4} xs={6} key={product.id}>
              {<CardComponent shop={product} image={images[product.id - 1]} />}
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductComponent;
