import React, { Fragment } from "react";
import { Footer } from "../../components/Footer";
import '../LandingSections/TopLayer.scss'
import { GetStarted } from "./GetStarted";

const TopLayer = () => {
  return (
    <div className='top-layer' >
      <GetStarted />
      <Footer />
    </div>
  );
};

export default TopLayer;
