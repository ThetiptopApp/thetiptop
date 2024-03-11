import { React } from "react";
import Navbar from "../Components/Navigation_Bar";
import Footer from "../Components/Footer";
import "./Participer.css";
const user = JSON.parse(localStorage.getItem("user"));

const Mentionslegales = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="content">
          <h2>Mentions légales</h2>
          <div className="card">
            <p>
            Selon les termes de la loi n° 2004-575 du 21 juin 2004 relative à la confiance dans l'économie numérique, les utilisateurs du site Thétiptop ont droit à une information claire concernant l'identité des divers acteurs impliqués dans sa conception et sa gestion.{" "}
            </p>
            <br></br>
            <h3>Edition du site</h3>
            <p>
            Le Site actuel, accessible à l'URL dsp5-archiwebo21b-hn-hb-fc-ce.fr, est édité par la société 000000000000000000, dotée d'un capital social de 10 000 euros, enregistrée au Registre du Commerce et des Sociétés de PARIS sous le numéro RCS PARIS A 514 919 919. Son siège social est localisé à Paris. La société est représentée par ZAIRI G1_DSP5, qui est dûment habilité(e) à cet effet.
            </p>
            <br></br>
            <h3>Hébergement</h3>
            <p>
              Le Site est hébergé par la société Google, situé PARIS, (contact
              téléphonique ou email : +33621212121).
            </p>
            <br></br>
            <h3>Directeur de publication</h3>
            <p>Le Directeur de la publication du Site est Soufian ZAIRI .</p>
            <br></br>
            <h3>Nous contacter</h3>
            <p>
              Par téléphone : +33621213838 Par email : s.zairi@gmail.com Par
              courrier : 18 rue Léon Frot, 75011 Paris
            </p>
            <br></br>
            <h3>Données personnelles</h3>
            <p>
            La gestion de vos informations personnelles est soumise à notre Charte du respect de la vie privée, consultable dans la rubrique "Charte de Protection des Données Personnelles", en accord avec le Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016 (RGPD).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mentionslegales;
