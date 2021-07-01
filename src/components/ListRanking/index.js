// Global
import React from "react";

// Assets
import "./styles.css";
import image from "../../assets/backgroundregister.png";

export default function ListRanking({ score, name, avatar }) {
  return (
    <div className="containerListRanking">
      <div className="containerListRankingLeft">
        <img src={avatar} alt="Avatar" />
        <h1>{name}</h1>
      </div>
      <div className="containerListRankingRight">
        <h1>{score} xp</h1>
      </div>
    </div>
  );
}
