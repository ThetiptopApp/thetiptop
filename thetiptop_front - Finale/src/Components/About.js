import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <p></p>
        <div className="col-2">
          <h2 style={{ color: "black" }}>Comment jouer ?</h2>
          <span className="line"></span>
          <p>
            Vous trouverez sur tous vos tickets de caisse et vos factures de vos
            achat chez Thétiptop, d'un montant dépassant 49€, un numéro composé
            de 10 chiffres
          </p>
          <p>
            Vous le récupérez, vous vous inscrivez ici sur notre plateforme, et
            vous tentez votre chance à gagner nos 5 lots, et à l'issu du jeu
            concours vous participez au grand tombola et tenterez de gagner un
            an de thé d'un montant de 360€ !
          </p>
          <Link to="/signup">
            <button className="button">Participer</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
