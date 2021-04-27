import React from "react";
import Evoting from "../../assets/img/e-voting.png";

export const EVoting = () => {
  return (
    <div className="container">
      <div className="row">
        <div class="col-lg-6">
          <div className="evoting-text">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2>Electronic Voting</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image-container">
            <img src={Evoting} className="evoting-img" />
          </div>
        </div>
      </div>
    </div>
  );
};
