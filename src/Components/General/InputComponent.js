import React from "react";
import "./styles.css";

const InputComponent = ({
  placeholder,
  icon = null,
  type = "text",
  disabled,
  onChange,
}) => {
  const backIcon =
    {
      backgroundImage: `url(${icon})`,
    } || {};
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={backIcon}
      className="inputLogin"
      disabled={disabled}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default InputComponent;
