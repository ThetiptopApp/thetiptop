import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Participer from "./Pages/Participer";
import Admin from "./Pages/Admin";
import Staff from "./Pages/Staff";
import NotFoundPage from "./Pages/NotFoundPage";
import Modifier from "./Pages/Modifier";
import MentionLegale from "./Pages/Mentionlegale"; // Assurez-vous d'utiliser le bon nom de fichier
import SignUpAdmin from "./Pages/SignUpAdmin";

const user = JSON.parse(localStorage.getItem("user"));

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {user && user.access_level === 3 && (
        <Route path="/Participer" element={<Participer />} />
      )}
      {user && <Route path="/Participer/Modifier" element={<Modifier />} />}
      {user && <Route path="/Admin/Modifier" element={<Modifier />} />}
      {user && <Route path="/Staff/Modifier" element={<Modifier />} />}
      {user && user.access_level === 1 && (
        <Route path="/Admin" element={<Admin />} />
      )}
      {user && user.access_level === 1 && (
        <Route path="/Admin/SignUp" element={<SignUpAdmin />} />
      )}
      {user && user.access_level === 2 && (
        <Route path="/Staff" element={<Staff />} />
      )}
      <Route path="/" element={<App />} />
      {!user && <Route path="SignUp" element={<SignUp isSignUp={true} />} />}
      {!user && <Route path="login" element={<SignUp isSignUp={false} />} />}
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/Mentionlegale" element={<MentionLegale />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);