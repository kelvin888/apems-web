import React from "react";
import HybridImg from "../../assets/img/hybrid.png";

export const Hybrid = () => {
  return (
    <div className="hybrid-row">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={HybridImg} className="w-100" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2>Hybrid</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="text-label mb-1">
                <span className="checkmark">&#x2713;</span> Keypad Voting
              </button>
              <button className="text-label mb-1">
                <span className="checkmark">&#x2713;</span> Proxy Anytime
              </button>
              <button className="text-label mb-1">
                <span className="checkmark">&#x2713;</span> USSD Voting
              </button>
              <button className="text-label mb-1">
                <span className="checkmark">&#x2713;</span> Electronic Anytime
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
