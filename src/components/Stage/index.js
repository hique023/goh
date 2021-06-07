// Global
import React, { useEffect, useState } from "react";
import TopBarPhase from "../TopBarPhase";
import SubBar from "../SubBar";
import SubStage from "../SubStage";
import QuizLink from "../QuizLink";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";

export default function Stage() {
  const [qualidade, setQualidade] = useState(0);
  const [treinamento, setTreinamento] = useState(0);
  const [desafio, setDesafio] = useState(0);
  const [quiz, setQuiz] = useState(0);
  const [scoreBar, setScoreBar] = useState(0);
  const [quizStatus, setQuizStatus] = useState();

  const [data, setData] = useState();
  const color = localStorage.getItem("color");
  const nameUser = localStorage.getItem("nameUser");
  const phaseId = localStorage.getItem("phaseId");
  const stageId = localStorage.getItem("stageId");
  const userUid = localStorage.getItem("userUid");
  const db = firebase.firestore();

  async function getScore() {
    var docRef = db.collection("score").doc(userUid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setData(data);
          // console.log(data);

          if (phaseId === "fase1") {
            if (stageId === "etapa1") {
              const qualidadeScore = data.fase1.etapa1.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase1.etapa1.treinamento;
              setTreinamento(treinamentoScore);
              // console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase1.etapa1.desafio;
              setDesafio(desafioScore);
              // console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase1.etapa1.quiz;
              setQuiz(quizScore);
              // console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              // console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase1: {
                      etapa1: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase1.etapa1;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 1");
            } else if (stageId === "etapa2") {
              const qualidadeScore = data.fase1.etapa2.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase1.etapa2.treinamento;
              setTreinamento(treinamentoScore);
              // console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase1.etapa2.desafio;
              setDesafio(desafioScore);
              // console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase1.etapa2.quiz;
              setQuiz(quizScore);
              // console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              // console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase1: {
                      etapa2: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase1.etapa2;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 2");
            } else if (stageId === "etapa3") {
              const qualidadeScore = data.fase1.etapa3.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase1.etapa3.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase1.etapa3.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase1.etapa3.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase1: {
                      etapa3: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase1.etapa3;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 3");
            } else if (stageId === "etapa4") {
              const qualidadeScore = data.fase1.etapa4.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase1.etapa4.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase1.etapa4.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase1.etapa4.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase1: {
                      etapa4: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase1.etapa4;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 4");
            }
            // console.log(`Fase1: ${data.fase1.etapa1}`);
          } else if (phaseId === "fase2") {
            if (stageId === "etapa1") {
              const qualidadeScore = data.fase2.etapa1.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase2.etapa1.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase2.etapa1.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase2.etapa1.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase2: {
                      etapa1: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase2.etapa1;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 1");
            } else if (stageId === "etapa2") {
              const qualidadeScore = data.fase2.etapa2.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase2.etapa2.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase2.etapa2.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase2.etapa2.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase2: {
                      etapa2: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase2.etapa2;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 2");
            } else if (stageId === "etapa3") {
              const qualidadeScore = data.fase2.etapa3.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase2.etapa3.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase2.etapa3.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase2.etapa3.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase2: {
                      etapa3: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase2.etapa3;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 3");
            } else if (stageId === "etapa4") {
              const qualidadeScore = data.fase2.etapa4.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase2.etapa4.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase2.etapa4.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase2.etapa4.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase2: {
                      etapa4: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase2.etapa4;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 4");
            }
            // console.log(`Fase2: ${data.fase2}`);
          } else if (phaseId === "fase3") {
            if (stageId === "etapa1") {
              const qualidadeScore = data.fase3.etapa1.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase3.etapa1.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase3.etapa1.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase3.etapa1.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase3: {
                      etapa1: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase3.etapa1;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 1");
            } else if (stageId === "etapa2") {
              const qualidadeScore = data.fase3.etapa2.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase3.etapa2.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase3.etapa2.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase3.etapa2.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase3: {
                      etapa2: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase3.etapa2;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 2");
            } else if (stageId === "etapa3") {
              const qualidadeScore = data.fase3.etapa3.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase3.etapa3.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase3.etapa3.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase3.etapa3.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase3: {
                      etapa3: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase3.etapa3;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 3");
            } else if (stageId === "etapa4") {
              const qualidadeScore = data.fase3.etapa4.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase3.etapa4.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase3.etapa4.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase3.etapa4.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase3: {
                      etapa4: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase3.etapa4;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 4");
            }
            // console.log(`Fase3: ${data.fase3}`);
          } else if (phaseId === "fase4") {
            if (stageId === "etapa1") {
              const qualidadeScore = data.fase4.etapa1.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase4.etapa1.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase4.etapa1.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase4.etapa1.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase4: {
                      etapa1: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase4.etapa1;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 1");
            } else if (stageId === "etapa2") {
              const qualidadeScore = data.fase4.etapa2.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase4.etapa2.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase4.etapa2.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase4.etapa2.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase4: {
                      etapa2: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase4.etapa2;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 2");
            } else if (stageId === "etapa3") {
              const qualidadeScore = data.fase4.etapa3.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase4.etapa3.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase4.etapa3.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase4.etapa3.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase4: {
                      etapa3: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase4.etapa3;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 3");
            } else if (stageId === "etapa4") {
              const qualidadeScore = data.fase4.etapa4.qualidade;
              setQualidade(qualidadeScore);
              //   console.log(`Qualidade ${qualidadeScore}`);

              const treinamentoScore = data.fase4.etapa4.treinamento;
              setTreinamento(treinamentoScore);
              //   console.log(`Treinamento ${treinamentoScore}`);

              const desafioScore = data.fase4.etapa4.desafio;
              setDesafio(desafioScore);
              //   console.log(`Desafio ${desafioScore}`);

              const quizScore = data.fase4.etapa4.quiz;
              setQuiz(quizScore);
              //   console.log(`Quiz Score ${quizScore}`);

              const totalScoreBar =
                qualidadeScore + treinamentoScore + desafioScore + quizScore;
              setScoreBar(totalScoreBar);
              //   console.log(`Total Score Bar: ${totalScoreBar}`);

              db.collection("score")
                .doc(userUid)
                .set(
                  {
                    // scoreTotal: score,
                    fase4: {
                      etapa4: {
                        totalEtapa: totalScoreBar,
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

              db.collection("quizFinish")
                .doc(userUid)
                .get()
                .then((doc) => {
                  if (doc.exists) {
                    const data = doc.data();
                    setData(data);

                    const statusQuizDb = data.fase4.etapa4;
                    setQuizStatus(statusQuizDb);
                  } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                  }
                })
                .catch((error) => {
                  console.log("Error getting document:", error);
                });

              // console.log("Etapa 4");
            }
            // console.log(`Fase4: ${data.fase4}`);
          }
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
    getScore();
  }, []);

  return (
    <div className="containerStage">
      <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

      <SubBar color={color} score={scoreBar} />

      <div className="listStage">
        <SubStage
          color={color}
          qualidade={qualidade}
          treinamento={treinamento}
          desafio={desafio}
        />
        <QuizLink
          name="Quiz"
          stageId="etapa1"
          color={color}
          quizScore={quiz}
          statusQuiz={quizStatus}
        />
      </div>
    </div>
  );
}
