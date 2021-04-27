import React from "react";
import { EVoting } from "./EVoting";
import { Hybrid } from "./Hybrid";
import { USSD } from "./USSD";

export const ThreeWay = () => {
  return (
    <section class="section py-0">
      <USSD />
      <EVoting />
      <Hybrid />
    </section>
  );
};
