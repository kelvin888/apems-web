import React, { Fragment } from "react";
import { Footer } from "../../components/Footer";
import '../LandingSections/TopLayer.scss'
import { GetStarted } from "./GetStarted";
import HowItWorks from "./HowItWorks";
import MainBody from "./MainBody";

const TopLayer = () => {
  return (
    <div className='top-layer' >
      <MainBody />
      <HowItWorks />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default TopLayer;
