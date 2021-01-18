import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ic_footer from "../../images/footer/best_pizza.png";
library.add(fab);

const FooterComponent = () => {
  return (
    <Row className="footer" noGutters>
      <Col xs={6}>
        <a href="https://www.facebook.com/" target="_Blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={["fab", "facebook-square"]}
            size="2x"
            color="white"
          />
        </a>
        <a href="https://www.instagram.com/" target="_Blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="2x"
            color="white"
          />
        </a>
      </Col>
      <Col xs={6} className="text-right">
        <img src={ic_footer} alt="" />
      </Col>
    </Row>
  );
};
export default FooterComponent;
