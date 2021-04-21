import React from "react";
import "./GetStarted.scss";

export const GetStarted = () => {
  return (
    <div className="get-started">
      <div className='get-started-container'>
      <h1 className="header-text">Get Started Today</h1>
      <div className='text-body'>
        Reach out to our amazing team today to get access and <br /> learn more about
        the amazing features on Apems
      </div>
      <div>
        <form className="form-container">
          <input autofocus placeholder="Email address" />
          <button type="submit">Request for Demo</button>
        </form>
      </div>
      </div>
    </div>
  );
};
