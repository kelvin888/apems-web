import React from "react";
import { Header } from "../../components/Header";
import BottomLayer from "../../components/LandingSections/BottomLayer";
import TopLayer from "../../components/LandingSections/TopLayer";
import "./Landing.scss";

export const Landing = () => {
  let n = 100;
  return (
    <div className="landing-container">
      <Header />
      <BottomLayer />
      <TopLayer />
    </div>
  );
};
