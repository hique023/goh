// Global
import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";

export default function Timer() {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState("00:00");
  const [startQuiz, setStartQuiz] = useState(localStorage.getItem("timer"));
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const userUid = localStorage.getItem("userUid");
  const history = useHistory();
  const db = firebase.firestore();

  function getTimerRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    // const hours = Math.floor((total / 1000 * 60 * 60) % 24)
    // const days = Math.floor(total / (1000 * 60 * 60 * 24))

    return {
      // total, days, hours, minutes, seconds
      total,
      minutes,
      seconds,
    };
  }

  function startTimer(deadline) {
    let { total, days, hours, minutes, seconds } = getTimerRemaining(deadline);
    if (total >= 0) {
      setTimer(
        // (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
      if (phaseId === "fase1") {
        if (stageId === "etapa1") {
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
      alert("Seu tempo acabou, contabilizamos o que respondeu até aqui =)");
      history.goBack();
    }
  }

  function clearTimer(endtime) {
    setTimer("10:00");

    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }

  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 600);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="containerTimer">
      <h1>{timer}</h1>
    </div>
  );
}
