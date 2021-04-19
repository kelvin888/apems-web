import React from "react";
import "./Button.scss";

export const Button = (props) => {
  return <button className="btn">{props.children}</button>;
};
