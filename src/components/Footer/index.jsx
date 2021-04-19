import React from "react";
import ApemsLogo from "../../assets/img/Apems full logo.png";
import ApLogo from "../../assets/img/ap-logo.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={ApemsLogo} alt="" />
        <div className="owner">
          By <img src={ApLogo} alt="ap-logo" />
          Africa Prudential
        </div>
      </div>
      <div className="footer-address">
        <h2>Our Address</h2>
        <p  className="content-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="footer-connect">
        <h2>Get In touch</h2>
          <ul className="footer-list content-text">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Medium</li>
          </ul>
      </div>
      <div className="footer-help-center">
        <h2>Help Center</h2>
        <p className="content-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="footer-partner">
        <h2>Partner With Apems</h2>
        <ul className="footer-list content-text">
            <li>Become a Partner</li>
            <li>Team up as an ambassador</li>
        </ul>
      </div>
    </div>
  );
};
