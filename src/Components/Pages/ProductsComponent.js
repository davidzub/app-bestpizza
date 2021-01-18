import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import ProductComponent from "../Products/ProductComponent";
import BreadcrumbsComponent from "../General/BreadcrumbsComponent";
import DescriptionComponent from "../General/DescriptionComponent";
import FooterComponent from "../General/FooterComponent";
import LogoutComponent from "../General/LogoutComponent";
import "./style.css";

const ProductsComponent = () => {
  let history = useHistory();
  let { id } = useParams();
  const listShops = useSelector((state) => state.listShops);
  let shop = null;
  if (listShops) {
    shop = listShops.find((shop) => shop.id == id);
  }
  const breadcrumb = [
    { text: "Pizzerías", url: "/shops" },
    shop ? { text: shop.name, url: null } : "",
  ];
  useEffect(() => {
    if (!shop) {
      history.push("/shops");
    }
  }, [shop]);
  return shop ? (
    <>
      <Row>
        <Col xs={12} id="Shops">
          <Row>
            <Col md={8} xs={9}>
              <BreadcrumbsComponent breadcrumb={breadcrumb} />
            </Col>
            <Col md={4} xs={3}>
              <LogoutComponent />
            </Col>
          </Row>
          <DescriptionComponent
            title={shop.name}
            description={`${shop.description} - Dirección: ${shop.address}`}
          />
          <ProductComponent products={shop.products} />
        </Col>
      </Row>
      <FooterComponent />
    </>
  ) : (
    ""
  );
};

export default ProductsComponent;
