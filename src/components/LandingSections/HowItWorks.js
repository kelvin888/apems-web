import React from "react";
import './HowItWorks.scss'
import Message from '../../assets/img/message.svg'
import Options from '../../assets/img/options.svg'
import Verified from '../../assets/img/verified.svg'

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="header-banner">
        <h1>How It Works</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="steps">
        <div className='step'>
          <img src={Message} />
          <h3>Step One</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='step'>
          <img src={Options} />
          <h3>Step Two</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='step'>
          <img src={Verified} />
          <h3>Step Three</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
