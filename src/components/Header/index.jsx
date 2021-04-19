import React from "react";
import ApemsLogo from "../../assets/img/Apems full logo.png";
import { Button } from "../Button";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <img className="header-logo" src={ApemsLogo} alt="" />

      <div className="header-right">
        <span className="header--faq">Frequently Asked Questions</span>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};
