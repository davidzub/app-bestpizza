import React from "react";
import "./styles.css";

const CardComponent = ({ shop, image, animation = false }) => {
  return (
    <div className="cardShop cursor-pointer">
      {animation ? flip(image, shop) : <img src={image} alt={shop.name} />}
      <h6>{shop.name}</h6>
      <p>{shop.address}</p>
    </div>
  );
};
const flip = (image, shop) => (
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={image} alt={shop.name} />
      </div>
      <div className="flip-card-back">
        <div>
          <h4>{shop.products.length}</h4>
          <p>Productos</p>
        </div>
      </div>
    </div>
  </div>
);

export default CardComponent;
