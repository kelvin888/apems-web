import React from "react";
import Message from "../../assets/img/message.svg";
import Options from "../../assets/img/options.svg";
import Verified from "../../assets/img/verified.svg";

export const HowItWorks = () => {
  return (
    <section class="p-0">
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
              <img src={Message} alt="message" />
              <h6 className="my-4">Innovation</h6>
              <p>
                Meeting notices are sent on your behalf to stakeholders via SMS
                and e-mails
              </p>
            </div>
            <div className="col-lg-4 step">
              <img src={Options} alt="options" />
              <h6 className="my-4">Proxy</h6>
              <p>
                Absent stakeholders are well-represented via proxies implemented
                at least 48 hours to event.
              </p>
            </div>
            <div className="col-lg-4 step">
              <img src={Verified} alt="verified" />
              <h6 className="my-4">Attendance</h6>
              <p>
                Documents names and details of attendees/participants present,
                physically and virtually
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
