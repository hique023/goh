// Global
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig.js";
import StageFinishModal from "../StageFinishModal";

// Assets
import "./styles.css";

export default function Questions() {
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);

  // const [answerDb1, setAnswerDb1] = useState("");
  // const [answerDb2, setAnswerDb2] = useState("");
  // const [answerDb3, setAnswerDb3] = useState("");
  // const [answerDb4, setAnswerDb4] = useState("");
  // const [answerDb5, setAnswerDb5] = useState("");
  // const [answerDb6, setAnswerDb6] = useState("");
  // const [answerDb7, setAnswerDb7] = useState("");
  // const [answerDb8, setAnswerDb8] = useState("");
  // const [answerDb9, setAnswerDb9] = useState("");
  // const [answerDb10, setAnswerDb10] = useState("");

  const color = localStorage.getItem("color");
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const uid = localStorage.getItem("userUid");
  const db = firebase.firestore();
  // const history = useHistory()

  const cardStyle = {
    backgroundColor: color || "var(--green-soft)",
  };

  function nextQuestion() {
    if (answerSelected != null) {
      setCount(count + 1);
      setAnswerSelected(null);
      console.log(count);
      clearRadio();

      if (phaseId === "fase1") {
        if (stageId === "etapa1") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa2") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa3") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa4") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        }
      } else if (phaseId === "fase2") {
        if (stageId === "etapa1") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa2") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa3") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa4") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        }
      } else if (phaseId === "fase3") {
        if (stageId === "etapa1") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa2") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa3") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa4") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        }
      } else if (phaseId === "fase4") {
        if (stageId === "etapa1") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa2") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa3") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        } else if (stageId === "etapa4") {
          if (count === 1) {
            const localAnswerDb1 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      1: localAnswerDb1,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 2) {
            const localAnswerDb2 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      2: localAnswerDb2,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 3) {
            const localAnswerDb3 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      3: localAnswerDb3,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 4) {
            const localAnswerDb4 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      4: localAnswerDb4,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 5) {
            const localAnswerDb5 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      5: localAnswerDb5,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 6) {
            const localAnswerDb6 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      6: localAnswerDb6,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 7) {
            const localAnswerDb7 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      7: localAnswerDb7,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 8) {
            const localAnswerDb8 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      8: localAnswerDb8,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 9) {
            const localAnswerDb9 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      9: localAnswerDb9,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          } else if (count === 10) {
            const localAnswerDb10 = answerSelected;
            db.collection("answers")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      10: localAnswerDb10,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar resposta do usuário!");
              });
          }
        }
      }

      if (answerSelected === correctAnswer) {
        setScore(score + questionDifficulty);

        if (phaseId === "fase1") {
          if (stageId === "etapa1") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa1: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa2") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa2: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa3") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa3: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa4") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase1: {
                    etapa4: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          }
        } else if (phaseId === "fase2") {
          if (stageId === "etapa1") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa1: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa2") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa2: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa3") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa3: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa4") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase2: {
                    etapa4: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          }
        } else if (phaseId === "fase3") {
          if (stageId === "etapa1") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa1: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa2") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa2: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa3") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa3: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa4") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase3: {
                    etapa4: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          }
        } else if (phaseId === "fase4") {
          if (stageId === "etapa1") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa1: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa2") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa2: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa3") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa3: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          } else if (stageId === "etapa4") {
            db.collection("score")
              .doc(uid)
              .set(
                {
                  fase4: {
                    etapa4: {
                      quiz: score + questionDifficulty,
                    },
                  },
                },
                { merge: true }
              )
              .then((docRef) => {})
              .catch((error) => {
                // console.error("Error adding document: ", error);
                console.log("Erro ao cadastrar score do usuário!");
              });
          }
        }
      }
    }
  }

  function clearRadio() {
    document.getElementById("answer1").checked = false;
    document.getElementById("answer2").checked = false;
    document.getElementById("answer3").checked = false;
    document.getElementById("answer4").checked = false;
  }

  function getQuestions() {
    var docRef = db.collection(phaseId).doc(stageId);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setData(data);

          //   console.log("-----------------------------");
          // console.log(count)
          // console.table("Document data:", data);
          // console.table("Document data:", data[1]);

          const pergunta = data[count];
          //   console.table(pergunta);
          // console.log('-----------------------------');

          const question = pergunta[0];
          const answer01 = pergunta[1];
          const answer02 = pergunta[2];
          const answer03 = pergunta[3];
          const answer04 = pergunta[4];
          const correct = pergunta[5];
          const difficulty = pergunta[6];
          let scoreQuestion = 0;
          // console.log(question);
          // console.log(answer1);
          // console.log(answer2);
          // console.log(answer3);
          // console.log(answer4);
          // console.log(correct);
          // console.log(`Dificuldade: ${difficulty}`);
          // console.log(`Score Question: ${scoreQuestion}`);
          setQuestion(question);
          setAnswer1(answer01);
          setAnswer2(answer02);
          setAnswer3(answer03);
          setAnswer4(answer04);
          setCorrectAnswer(correct);
          setQuestionDifficulty(difficulty);

          //   console.log("----------------------------------");
          //   console.log("variáveis globais");
          //   console.log(`Questão: ${question}`);
          //   console.log(`1: ${answer01}`);
          //   console.log(`2: ${answer02}`);
          //   console.log(`3: ${answer03}`);
          //   console.log(`4: ${answer04}`);
          //   console.log(`Correta: ${correctAnswer}`);
          //   console.log(`Dificuldade: ${questionDifficulty}`);
          //   console.log(`Score: ${score}`);
          //   console.log("----------------------------------");

          // if (difficulty === 'easy') {
          //     const easy = 1
          //     scoreQuestion = easy
          //     console.log(`Score question easy ${scoreQuestion}`);
          // } else if (difficulty === 'medium') {
          //     const medium = 3
          //     scoreQuestion = medium
          //     console.log(`Score question medium ${scoreQuestion}`);
          // } else if (difficulty === 'hard') {
          //     const hard = 6
          //     scoreQuestion = hard
          //     console.log(`Score question hard ${scoreQuestion}`);
          // }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    getQuestions();
    localStorage.setItem("scoreQuiz", score);
  }, [count]);

  return (
    <div className="containerQuestions">
      {count > 10 && <StageFinishModal />}

      <div className="contentQuestions">
        <h1>
          {count <= 10 ? count : "10"}. {question}
        </h1>
      </div>

      <div className="contentAnswers">
        <div>
          <input
            type="radio"
            name="answers"
            id="answer1"
            value={answer1}
            onChange={(e) => {
              setAnswerSelected(e.target.value);
            }}
          />

          <b>
            <label htmlFor="answer1">{answer1}</label>
          </b>
        </div>
        <div>
          <input
            type="radio"
            name="answers"
            id="answer2"
            value={answer2}
            onChange={(e) => {
              setAnswerSelected(e.target.value);
            }}
          />

          <b>
            <label htmlFor="answer2">{answer2}</label>
          </b>
        </div>
        <div>
          <input
            type="radio"
            name="answers"
            id="answer3"
            value={answer3}
            onChange={(e) => {
              setAnswerSelected(e.target.value);
            }}
          />

          <b>
            <label htmlFor="answer3">{answer3}</label>
          </b>
        </div>
        <div>
          <input
            type="radio"
            name="answers"
            id="answer4"
            value={answer4}
            onChange={(e) => {
              setAnswerSelected(e.target.value);
            }}
          />

          <b>
            <label htmlFor="answer4">{answer4}</label>
          </b>
        </div>
      </div>

      <b>
        <h3>Resposta selecionada: {answerSelected}</h3>
      </b>

      {count < 10 ? (
        <div className="buttonsQuestions">
          <button style={cardStyle} onClick={nextQuestion}>
            Próxima
          </button>
        </div>
      ) : (
        <div className="buttonsQuestions">
          <button style={cardStyle} onClick={nextQuestion}>
            Finalizar
          </button>
        </div>
      )}
    </div>
  );
}
