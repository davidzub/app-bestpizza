import React from "react";
import "./styles.css";
const DescriptionComponent = ({ title, description }) => {
  return (
    <div id="Description">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionComponent;
