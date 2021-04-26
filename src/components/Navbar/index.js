import React from "react";
import ApemsLogo from "../../assets/img/Apems full logo.png";
import { Button } from "../Button";

export const Navbar = () => {
  return (
    <header id="topnav" class="defaultscroll sticky">
      <div class="container d-flex align-items-center justify-content-between">
        <a class="logo" href="index.html">
          <img
            src={ApemsLogo}
            height="24"
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
        <div className="d-flex align-items-center" style={{ gap: "1rem" }}>
          <span className="mr-3">Frequently Asked Questions</span>
          <Button>Sign In</Button>
        </div>
      </div>
    </header>
  );
};
