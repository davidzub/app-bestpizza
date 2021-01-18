import React from "react";
import { Row, Col } from "react-bootstrap";
import CardComponent from "../General/CardComponent";
import { withRouter } from "react-router-dom";
import Panos_pizza from "../../images/shops/panos_pizza.png";
import pizzeria_camion from "../../images/shops/pizzeria_camion.png";
import Sbarro from "../../images/shops/sbarro.png";
import trulli from "../../images/shops/trulli.png";
import voglia_di_pizza from "../../images/shops/voglia_di_pizza.png";

const images = [Panos_pizza, pizzeria_camion, Sbarro, trulli, voglia_di_pizza];

const ShopComponent = ({ shops, history }) => {
  const handleClick = (id) => {
    history.push(`/products/${id}`);
  };
  return (
    <Row>
      <Col md={12} lg={8} xs={12}>
        <Row>
          {shops.map((shop) => (
            <Col
              xs={6}
              md={4}
              key={shop.id}
              onClick={() => handleClick(shop.id)}
            >
              {
                <CardComponent
                  shop={shop}
                  image={images[shop.id - 1]}
                  animation
                />
              }
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default withRouter(ShopComponent);
