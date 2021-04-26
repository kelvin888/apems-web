import React from "react";
import Message from "../../assets/img/message.svg";
import Options from "../../assets/img/options.svg";
import Verified from "../../assets/img/verified.svg";

export const HowItWorks = () => {
  return (
    <section class="section p-0">
      <div className="how-it-works">
        <div class="container">
          <div className="header-banner">
            <h2>How It Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row steps">
            <div className="col-lg-4 step">
              <img src={Message} />
              <h3>Step One</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-4 step">
              <img src={Options} />
              <h3>Step Two</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-4 step">
              <img src={Verified} />
              <h3>Step Three</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
