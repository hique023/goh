// Global
import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

export default function StageFinishModal() {
  const history = useHistory();

  function closeModal() {
    history.goBack();
  }

  return (
    <div className="overlay">
      <div className="container">
        <div className="containerContent">
          <strong>Ah não 😲</strong>
          <p>
            Você regarregou a página e perdeu a chance de continuar no quiz!
          </p>
        </div>

        <button type="button" onClick={closeModal}>
          <AiOutlineClose size={30} color="black" />
        </button>
      </div>
    </div>
  );
}
