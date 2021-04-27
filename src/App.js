import { Navbar } from "./components/Navbar";
import { StayConnected } from "./components/StayConnected";
import { ThreeWay } from "./components/ThreeWay";
import { windowScroll } from "./utils/app";
import { useEffect } from "react";

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
    </>
  );
}

export default App;
