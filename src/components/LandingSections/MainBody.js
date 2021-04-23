import React from "react";
import Evoting from '../../assets/img/Group-5818.png'
import USSD from '../../assets/img/Group-5819.png'
import Hybrid from '../../assets/img/Group-5820.png'
import "./MainBody.scss";

const MainBody = () => {
  return (
    <div className="main-container">
      <div className='three-way-solution'>
        <button className="text-label">Unlimited Guests Allowed</button>
        <h1>A 3-way solution</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className='image-and-text'>
        <div className="image-container">
          <img src={USSD} />
        </div>
        <div className="text-container">
          <h1>USSD</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="text-label  mb-1"> <span className='checkmark'>&#x2713;</span> Instant Voting</button>
          <button className="text-label"><span className='checkmark'>&#x2713;</span> Anywhere Anytime</button>
        </div>
      </div>

      <div className="image-and-text">
        <div className="text-container">
          <h1>Electronic Voting</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="text-label mb-1"><span className='checkmark'>&#x2713;</span> Instant Voting</button>
          <button className="text-label"> <span className='checkmark'>&#x2713;</span> Anywhere Anytime</button>
        </div>
        <div className="image-container">
          <img src={Evoting} />
        </div>
      </div>

      <div className='image-and-text'>
        <div className="image-container">
          <img src={Hybrid} />
        </div>
        <div className="text-container">
          <h1>Hybrid</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="text-label mb-1"><span className='checkmark'>&#x2713;</span> Instant Voting</button>
          <button className="text-label"><span className='checkmark'>&#x2713;</span> Anywhere Anytime</button>
        </div>
      </div>

    </div>
  );
};

export default MainBody;
