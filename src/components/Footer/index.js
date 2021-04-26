import React from "react";
import ApemsLogo from "../../assets/img/Apems full logo.png";
import ApLogo from "../../assets/img/ap-logo.svg";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="footer-logo col-lg-2 col-md-6 col-12 mb-3">
          <img src={ApemsLogo} alt="" />
          <div className="owner">
            By <img src={ApLogo} alt="ap-logo" />
            Africa Prudential
          </div>
        </div>
        <div className="footer-address col-lg-3 col-md-6 col-12 mb-3">
          <h5>Our Address</h5>
          <p className="content-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="footer-connect col-lg-2 col-md-6 col-12 mb-3">
          <h5>Get In touch</h5>
          <ul className="footer-list content-text">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Medium</li>
          </ul>
        </div>
        <div className="footer-help-center col-lg-2 col-md-6 col-12 mb-3">
          <h5>Help Center</h5>
          <p className="content-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="footer-partner col-lg-3 col-md-6 col-12 mb-3">
          <h5>Partner With Apems</h5>
          <ul className="footer-list content-text">
            <li>Become a Partner</li>
            <li>Team up as an ambassador</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
