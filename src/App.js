import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { StayConnected } from "./components/StayConnected";
import { ThreeWay } from "./components/ThreeWay";
import { HowItWorks } from "./components/HowItWorks";
import { windowScroll } from "./utils/app";
import { useEffect } from "react";
import { GetStarted } from "./components/GetStarted";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      windowScroll();
    });
    return () => {
      window.removeEventListener("scroll", (ev) => {
        ev.preventDefault();
        windowScroll();
      });
    };
  }, []);
  return (
    <>
      <Navbar />
      <StayConnected />
      <ThreeWay />
      <HowItWorks />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
