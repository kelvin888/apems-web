import React from "react";
import UssdImg from "../../assets/img/ussd.png";

export const USSD = () => {
  return (
    <div className="three-way-row">
      <div className="container">
        <div className="row">
          <div class="col-lg-12">
            <div className="three-way-solution">
              <button className="text-label text-center">
                Unlimited Guests Allowed
              </button>
              <h1>A 3-way solution</h1>
            </div>
          </div>
          <div class="col-lg-7">
            <img src={UssdImg} className="ussd-img" />
          </div>
          <div className="col-lg-5">
            <div className="d-flex align-items-center h-100">
              <div className="text-container">
                <h2>USSD</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
