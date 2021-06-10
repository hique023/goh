// Global
import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";
import { AiOutlineClose } from "react-icons/ai";

export default function StageFinishModal() {
  const history = useHistory();
  const score = localStorage.getItem("scoreQuiz");

  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const userUid = localStorage.getItem("userUid");
  const db = firebase.firestore();

  function closeModal() {
    history.goBack();
    statusQuiz();
  }

  function statusQuiz() {
    if (phaseId === "fase1") {
      if (stageId === "etapa1") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase1: {
                etapa1: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa2") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase1: {
                etapa2: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa3") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase1: {
                etapa3: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa4") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase1: {
                etapa4: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      }
    } else if (phaseId === "fase2") {
      if (stageId === "etapa1") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase2: {
                etapa1: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa2") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase2: {
                etapa2: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa3") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase2: {
                etapa3: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa4") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase2: {
                etapa4: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      }
    } else if (phaseId === "fase3") {
      if (stageId === "etapa1") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase3: {
                etapa1: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa2") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase3: {
                etapa2: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa3") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase3: {
                etapa3: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa4") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase3: {
                etapa4: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      }
    } else if (phaseId === "fase4") {
      if (stageId === "etapa1") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase4: {
                etapa1: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa2") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase4: {
                etapa2: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa3") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase4: {
                etapa3: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      } else if (stageId === "etapa4") {
        localStorage.setItem("startQuiz", false);
        db.collection("quizFinish")
          .doc(userUid)
          .set(
            {
              // scoreTotal: score,
              fase4: {
                etapa4: true,
              },
            },
            { merge: true }
          )
          .then((docRef) => {})
          .catch((error) => {
            // console.error("Error adding document: ", error);
            console.log("Erro ao cadastrar status do quiz do usuário!");
          });
      }
    }
  }

  return (
    <div className="overlay">
      <div className="container">
        <div className="containerHeader">
          <header>{score} xp</header>
        </div>

        <div className="containerContent">
          <strong>Parabéns!</strong>
          <p>Você finalizou uma etapa.</p>
        </div>

        <button type="button" onClick={closeModal}>
          <AiOutlineClose size={30} color="black" />
        </button>
      </div>
    </div>
  );
}
