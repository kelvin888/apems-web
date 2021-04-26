import React from "react";

export const GetStarted = () => {
  return (
    <div className="get-started">
      <div className="container d-flex">
        <div className="get-started-container">
          <h2 className="header-text">Get Started Today</h2>
          <div className="text-body">
            Reach out to our amazing team today to get access and <br /> learn
            more about the amazing features on Apems
          </div>
          <div>
            <form className="form-container">
              <input autofocus placeholder="Email address" />
              <button type="submit">Request for Demo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
