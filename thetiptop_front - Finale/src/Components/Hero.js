import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Timer from "../Components/Timer_Cpn";

const Hero = () => {
  return (
    <>
      <div className="hero">s
        <div className="content">
          <p></p>
          <p>
            Le grand jeu concours
            <br />
            ThéTipTop
          </p>

          <Timer />
          <Link to="/signup">
            <button className="button">Participer</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
