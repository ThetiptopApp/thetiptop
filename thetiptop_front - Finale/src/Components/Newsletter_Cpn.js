import { React, useState } from "react";
import "./Newsletter_Cpn.css";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState({ email: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/api/addemail`;
    const { data: res } = await axios.post(url, email);
    setMessage(res.message);
  };

  const handleChange = (e) => {
    setEmail({ email: e.target.value });
    setMessage("");
  };

  return (
    <div className="newsletter" id="newsletter">
      <div className="container">
        <p></p>
        <div className="col-3">
          <h2 style={{ color: "black" }}>Abonnez-vous à la newsletter</h2>
          <span className="line"></span>
          <input
            type="text"
            name="email"
            className="input4"
            placeholder="Veuillez saisir votre email"
            onChange={handleChange}
            value={email.email}
          />
          <button className="button" onClick={handleClick}>
            Abonnez-vous
          </button>
          {message && <span>{message}</span>}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
