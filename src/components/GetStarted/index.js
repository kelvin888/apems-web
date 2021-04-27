import React from "react";
import { DemoRequestInput } from "../UIKit/DemoRequestInput";

export const GetStarted = () => {
  return (
    <section class="p-0">
      <div className="get-started">
        <div className="container d-flex">
          <div className="get-started-container">
            <h2 className="header-text">Get Started Today</h2>
            <div className="text-body mb-4">
              Reach out to our amazing team today to get access and <br /> learn
              more about the amazing features on Apems
            </div>
            <div>
              <DemoRequestInput borderType="pink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
