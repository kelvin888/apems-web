import React from "react";
import "./Button.scss";

export const Button = (props) => {
  return <button className="apems-btn-rounded">{props.children}</button>;
};
