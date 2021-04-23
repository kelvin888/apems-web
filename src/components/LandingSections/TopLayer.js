import React, { Fragment } from "react";
import { Footer } from "../../components/Footer";
import '../LandingSections/TopLayer.scss'
import { GetStarted } from "./GetStarted";
import HowItWorks from "./HowItWorks";

const TopLayer = () => {
  return (
    <div className='top-layer' >
      <HowItWorks />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default TopLayer;
