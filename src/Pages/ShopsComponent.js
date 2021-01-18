import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import ShopComponent from "../Components/Shops/ShopComponent";
import BreadcrumbsComponent from "../Components/General/BreadcrumbsComponent";
import DescriptionComponent from "../Components/General/DescriptionComponent";
import InputComponent from "../Components/General/InputComponent";
import ic_search from "../images/ic_search.png";
import { getListShops } from "../store/actions/shops";
import FooterComponent from "../Components/General/FooterComponent";
import LogoutComponent from "Components/General/LogoutComponent";
import "./style.css";

const ShopsComponent = () => {
  const listShops = useSelector((state) => state.listShops);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");
  const [shops, setShops] = useState(listShops);
  const breadcrumb = [{ text: "Pizzerías", url: null }];
  useEffect(() => {
    dispatch(getListShops());
  }, []);
  useEffect(() => {
    if (filter != "") {
      const filterShops = listShops.filter(
        (shop) => shop.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
      );
      setShops(filterShops);
    } else {
      setShops(listShops);
    }
  }, [filter, listShops]);
  return (
    <>
      <Row>
        <Col xs={12} id="Shops">
          <Row>
            <Col md={8} xs={6}>
              <BreadcrumbsComponent breadcrumb={breadcrumb} />
            </Col>
            <Col md={4} xs={6}>
              <LogoutComponent />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={6} lg={4} xs={6}>
              {" "}
              <DescriptionComponent
                title={"Tiendas"}
                description={"Escoge tu pizzería favorita"}
              />
            </Col>
            <Col md={6} lg={4} xs={6}>
              <InputComponent
                type={"text"}
                icon={ic_search}
                placeholder="Buscar"
                onChange={(value) => setFilter(value)}
              />
            </Col>
          </Row>
          {shops ? <ShopComponent shops={shops} /> : ""}
        </Col>
      </Row>
      <FooterComponent />
    </>
  );
};

export default ShopsComponent;
