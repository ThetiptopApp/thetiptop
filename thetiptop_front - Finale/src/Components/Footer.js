import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Accueil</a>
          </li>
          <li className="nav-item">
            <a href="#about">Comment jouer</a>
          </li>
          <li className="nav-item">
            <a href="#lots">Lots</a>
          </li>
          <li className="nav-item">
            <a href="/participer">Participer</a>
          </li>
          <li className="nav-item">
            <a href="/mentionslegales">Mentions Légales</a>
          </li>
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>18 rue Léon Frot, 75011 Paris </p>
          <p>2022 Thétiptop - Tous droits réservés - Projet étudiant fictif </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
