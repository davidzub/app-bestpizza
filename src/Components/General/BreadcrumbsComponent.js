import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const BreadcrumbsComponent = ({ breadcrumb }) => {
  return (
    <ol id="breadcrumb">
      {breadcrumb.map((element, k) =>
        k == breadcrumb.length - 1 ? (
          <li className="breadcrumb-element active" key={k}>
            <span>{element.text}</span>
          </li>
        ) : (
          <li className="breadcrumb-element" key={k}>
            <Link to={element.url}>{element.text}</Link>
          </li>
        )
      )}
    </ol>
  );
};
export default BreadcrumbsComponent;
