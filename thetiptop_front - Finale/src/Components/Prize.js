import React from "react";
import prize1 from "./Img/Prize_1.png";
import prize2 from "./Img/Prize_2.png";
import prize3 from "./Img/Prize_3.png";
import prize4 from "./Img/Prize_4.png";
import prize5 from "./Img/Prize_5.png";
import "./Prize.css";

const Lots = () => {
  return (
    <div className="lots" id="lots">
      <div className="container">
        <h2 style={{ color: "black" }}>Lots</h2>
        <span className="line2"></span>
        <div className="content-second">
          <div className="card">
            <img src={prize4} alt="user1" />
            <p>Un coffret découverte d’une valeur de 69€</p>
          </div>
          <div className="card">
            <img src={prize3} alt="user1" />
            <p>Un coffret découverte d’une valeur de 39€</p>
          </div>
        </div>
        <div className="content">
          <div className="card">
            <img src={prize1} alt="user1" />
            <p>Une boîte de 100g d'un thé signature</p>
          </div>
          <div className="card">
            <img src={prize5} alt="user1" />
            <p>Un infuseur à thé</p>
          </div>
          <div className="card">
            <img src={prize2} alt="user1" />
            <p>Une boîte de 100g d'un thé détox ou d'infusion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lots;
