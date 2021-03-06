import React from "react";
import ApemsLogo from "../../assets/img/Apems full logo.png";
import { Button } from "../UIKit/Button";

export const Navbar = () => {
  return (
    <header id="topnav" class=" sticky">
      <div class="container d-flex align-items-center justify-content-between ">
        <a class="logo" href="index.html">
          <img
            src={ApemsLogo}
            height="40"
            class="logo-light-mode"
            alt="logo-dark"
          />
          <img
            src={ApemsLogo}
            height="24"
            class="logo-dark-mode"
            alt="logo-light"
          />
        </a>
        <div
          className="align-items-center"
          style={{ display: "grid", gridAutoFlow: "column", gap: "3rem" }}
        >
          <span className="header--faq">Frequently Asked Questions</span>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};
