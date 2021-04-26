import React from "react";
import Evoting from "../../assets/img/e-voting.png";
import USSD from "../../assets/img/ussd.png";
import Hybrid from "../../assets/img/hybrid.png";

export const ThreeWay = () => {
  return (
    <section class="section pt-0">
      <div class="container">
        <div className="row">
          <div class="col-lg-12">
            <div className="three-way-solution">
              <button className="text-label">Unlimited Guests Allowed</button>
              <h2>A 3-way solution</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-lg-6">
            <img src={USSD} className="w-100" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex align-items-center h-100">
              <div className="text-container">
                <h2>USSD</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="text-label  mb-1">
                  <span className="checkmark">&#x2713;</span> Instant Voting
                </button>
                <button className="text-label">
                  <span className="checkmark">&#x2713;</span> Anywhere Anytime
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-lg-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2>Electronic Voting</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="text-label mb-1">
                <span className="checkmark">&#x2713;</span> Instant Voting
              </button>
              <button className="text-label">
                <span className="checkmark">&#x2713;</span> Anywhere Anytime
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image-container">
              <img src={Evoting} className="w-100" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <img src={Hybrid} className="w-100" />
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <h2>Hybrid</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="text-label mb-1">
                <span className="checkmark">&#x2713;</span> Instant Voting
              </button>
              <button className="text-label">
                <span className="checkmark">&#x2713;</span> Anywhere Anytime
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
