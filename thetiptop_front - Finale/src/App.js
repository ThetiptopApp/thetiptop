import React from "react";
import Navigation_Bar from "./Components/Navigation_Bar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Prize from "./Components/Prize";
import Newsletter_Cpn from "./Components/Newsletter_Cpn";
import Footer from "./Components/Footer";
import CookiesBar from "./Components/CookiesBar";

function App() {
  return (
    <>
      <Navigation_Bar />
      <Hero />
      <About />
      <Prize />
      <Newsletter_Cpn />
      <Footer />
      <CookiesBar />
    </>
  );
}

export default App;
