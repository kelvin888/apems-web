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
                Login and register online, vote, and ask questions in a meeting.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image-container">
            <img src={Evoting} className="evoting-img" alt="e-voting" />
          </div>
        </div>
      </div>
    </div>
  );
};
