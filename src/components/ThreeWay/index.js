import React from "react";
import { Footer } from "../Footer";
import { GetStarted } from "../GetStarted";
import { HowItWorks } from "../HowItWorks";
import { EVoting } from "./EVoting";
import { Hybrid } from "./Hybrid";
import { USSD } from "./USSD";

export const ThreeWay = () => {
  return (
    <>
      <div class="pt-5" id="scroll-over-section">
        <USSD />
        <EVoting />
        <Hybrid />
        <HowItWorks />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};
