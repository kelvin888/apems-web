import React from "react";
import { Header } from "../../components/Header";
import {Footer} from '../../components/Footer';
import "./Landing.scss";

export const Landing = () => {
  let n = 100;
  return (
    <div className="landing-container">
      <Header />
      <Footer />
    </div>
  );
};
