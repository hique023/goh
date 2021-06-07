// Global
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";
import ListPhases from "../ListPhases";
import firebase from "../../firebaseConfig.js";

// Assets
import "./styles.css";

export default function Home() {
  const [data, setData] = useState(0);
  const userUid = localStorage.getItem("userUid");
  const nameUser = localStorage.getItem("nameUser");
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

          // Fase 1

          // Etapa 1
          const desafioFase1Etapa1 = data.fase1.etapa1.desafio;
          const qualidadeFase1Etapa1 = data.fase1.etapa1.qualidade;
          const quizFase1Etapa1 = data.fase1.etapa1.quiz;
          const treinamentoFase1Etapa1 = data.fase1.etapa1.treinamento;
          const totalFase1Etapa1 =
            desafioFase1Etapa1 +
            qualidadeFase1Etapa1 +
            quizFase1Etapa1 +
            treinamentoFase1Etapa1;

          // Etapa 2
          const desafioFase1Etapa2 = data.fase1.etapa2.desafio;
          const qualidadeFase1Etapa2 = data.fase1.etapa2.qualidade;
          const quizFase1Etapa2 = data.fase1.etapa2.quiz;
          const treinamentoFase1Etapa2 = data.fase1.etapa2.treinamento;
          const totalFase1Etapa2 =
            desafioFase1Etapa2 +
            qualidadeFase1Etapa2 +
            quizFase1Etapa2 +
            treinamentoFase1Etapa2;

          // Etapa 3
          const desafioFase1Etapa3 = data.fase1.etapa3.desafio;
          const qualidadeFase1Etapa3 = data.fase1.etapa3.qualidade;
          const quizFase1Etapa3 = data.fase1.etapa3.quiz;
          const treinamentoFase1Etapa3 = data.fase1.etapa3.treinamento;
          const totalFase1Etapa3 =
            desafioFase1Etapa3 +
            qualidadeFase1Etapa3 +
            quizFase1Etapa3 +
            treinamentoFase1Etapa3;

          // Etapa 4
          const desafioFase1Etapa4 = data.fase1.etapa4.desafio;
          const qualidadeFase1Etapa4 = data.fase1.etapa4.qualidade;
          const quizFase1Etapa4 = data.fase1.etapa4.quiz;
          const treinamentoFase1Etapa4 = data.fase1.etapa4.treinamento;
          const totalFase1Etapa4 =
            desafioFase1Etapa4 +
            qualidadeFase1Etapa4 +
            quizFase1Etapa4 +
            treinamentoFase1Etapa4;

          const totalFase1 =
            totalFase1Etapa1 +
            totalFase1Etapa2 +
            totalFase1Etapa3 +
            totalFase1Etapa4;

          // Fase 2

          // Etapa 1
          const desafioFase2Etapa1 = data.fase2.etapa1.desafio;
          const qualidadeFase2Etapa1 = data.fase2.etapa1.qualidade;
          const quizFase2Etapa1 = data.fase2.etapa1.quiz;
          const treinamentoFase2Etapa1 = data.fase2.etapa1.treinamento;
          const totalFase2Etapa1 =
            desafioFase2Etapa1 +
            qualidadeFase2Etapa1 +
            quizFase2Etapa1 +
            treinamentoFase2Etapa1;

          // Etapa 2
          const desafioFase2Etapa2 = data.fase2.etapa2.desafio;
          const qualidadeFase2Etapa2 = data.fase2.etapa2.qualidade;
          const quizFase2Etapa2 = data.fase2.etapa2.quiz;
          const treinamentoFase2Etapa2 = data.fase2.etapa2.treinamento;
          const totalFase2Etapa2 =
            desafioFase2Etapa2 +
            qualidadeFase2Etapa2 +
            quizFase2Etapa2 +
            treinamentoFase2Etapa2;

          // Etapa 3
          const desafioFase2Etapa3 = data.fase2.etapa3.desafio;
          const qualidadeFase2Etapa3 = data.fase2.etapa3.qualidade;
          const quizFase2Etapa3 = data.fase2.etapa3.quiz;
          const treinamentoFase2Etapa3 = data.fase2.etapa3.treinamento;
          const totalFase2Etapa3 =
            desafioFase2Etapa3 +
            qualidadeFase2Etapa3 +
            quizFase2Etapa3 +
            treinamentoFase2Etapa3;

          // Etapa 4
          const desafioFase2Etapa4 = data.fase2.etapa4.desafio;
          const qualidadeFase2Etapa4 = data.fase2.etapa4.qualidade;
          const quizFase2Etapa4 = data.fase2.etapa4.quiz;
          const treinamentoFase2Etapa4 = data.fase2.etapa4.treinamento;
          const totalFase2Etapa4 =
            desafioFase2Etapa4 +
            qualidadeFase2Etapa4 +
            quizFase2Etapa4 +
            treinamentoFase2Etapa4;

          const totalFase2 =
            totalFase2Etapa1 +
            totalFase2Etapa2 +
            totalFase2Etapa3 +
            totalFase2Etapa4;

          // Fase 3

          // Etapa 1
          const desafioFase3Etapa1 = data.fase3.etapa1.desafio;
          const qualidadeFase3Etapa1 = data.fase3.etapa1.qualidade;
          const quizFase3Etapa1 = data.fase3.etapa1.quiz;
          const treinamentoFase3Etapa1 = data.fase3.etapa1.treinamento;
          const totalFase3Etapa1 =
            desafioFase3Etapa1 +
            qualidadeFase3Etapa1 +
            quizFase3Etapa1 +
            treinamentoFase3Etapa1;

          // Etapa 2
          const desafioFase3Etapa2 = data.fase3.etapa2.desafio;
          const qualidadeFase3Etapa2 = data.fase3.etapa2.qualidade;
          const quizFase3Etapa2 = data.fase3.etapa2.quiz;
          const treinamentoFase3Etapa2 = data.fase3.etapa2.treinamento;
          const totalFase3Etapa2 =
            desafioFase3Etapa2 +
            qualidadeFase3Etapa2 +
            quizFase3Etapa2 +
            treinamentoFase3Etapa2;

          // Etapa 3
          const desafioFase3Etapa3 = data.fase3.etapa3.desafio;
          const qualidadeFase3Etapa3 = data.fase3.etapa3.qualidade;
          const quizFase3Etapa3 = data.fase3.etapa3.quiz;
          const treinamentoFase3Etapa3 = data.fase3.etapa3.treinamento;
          const totalFase3Etapa3 =
            desafioFase3Etapa3 +
            qualidadeFase3Etapa3 +
            quizFase3Etapa3 +
            treinamentoFase3Etapa3;

          // Etapa 4
          const desafioFase3Etapa4 = data.fase3.etapa4.desafio;
          const qualidadeFase3Etapa4 = data.fase3.etapa4.qualidade;
          const quizFase3Etapa4 = data.fase3.etapa4.quiz;
          const treinamentoFase3Etapa4 = data.fase3.etapa4.treinamento;
          const totalFase3Etapa4 =
            desafioFase3Etapa4 +
            qualidadeFase3Etapa4 +
            quizFase3Etapa4 +
            treinamentoFase3Etapa4;

          const totalFase3 =
            totalFase3Etapa1 +
            totalFase3Etapa2 +
            totalFase3Etapa3 +
            totalFase3Etapa4;

          // Fase 4

          // Etapa 1
          const desafioFase4Etapa1 = data.fase4.etapa1.desafio;
          const qualidadeFase4Etapa1 = data.fase4.etapa1.qualidade;
          const quizFase4Etapa1 = data.fase4.etapa1.quiz;
          const treinamentoFase4Etapa1 = data.fase4.etapa1.treinamento;
          const totalFase4Etapa1 =
            desafioFase4Etapa1 +
            qualidadeFase4Etapa1 +
            quizFase4Etapa1 +
            treinamentoFase4Etapa1;

          // Etapa 2
          const desafioFase4Etapa2 = data.fase4.etapa2.desafio;
          const qualidadeFase4Etapa2 = data.fase4.etapa2.qualidade;
          const quizFase4Etapa2 = data.fase4.etapa2.quiz;
          const treinamentoFase4Etapa2 = data.fase4.etapa2.treinamento;
          const totalFase4Etapa2 =
            desafioFase4Etapa2 +
            qualidadeFase4Etapa2 +
            quizFase4Etapa2 +
            treinamentoFase4Etapa2;

          // Etapa 3
          const desafioFase4Etapa3 = data.fase4.etapa3.desafio;
          const qualidadeFase4Etapa3 = data.fase4.etapa3.qualidade;
          const quizFase4Etapa3 = data.fase4.etapa3.quiz;
          const treinamentoFase4Etapa3 = data.fase4.etapa3.treinamento;
          const totalFase4Etapa3 =
            desafioFase4Etapa3 +
            qualidadeFase4Etapa3 +
            quizFase4Etapa3 +
            treinamentoFase4Etapa3;

          // Etapa 4
          const desafioFase4Etapa4 = data.fase4.etapa4.desafio;
          const qualidadeFase4Etapa4 = data.fase4.etapa4.qualidade;
          const quizFase4Etapa4 = data.fase4.etapa4.quiz;
          const treinamentoFase4Etapa4 = data.fase4.etapa4.treinamento;
          const totalFase4Etapa4 =
            desafioFase4Etapa4 +
            qualidadeFase4Etapa4 +
            quizFase4Etapa4 +
            treinamentoFase4Etapa4;

          const totalFase4 =
            totalFase4Etapa1 +
            totalFase4Etapa2 +
            totalFase4Etapa3 +
            totalFase4Etapa4;

          // Score Total Ranking
          const scoreTotal = totalFase1 + totalFase2 + totalFase3 + totalFase4;

          db.collection("score")
            .doc(userUid)
            .set(
              {
                scoreTotal: scoreTotal,
                fase1: {
                  etapa1: {
                    totalEtapa: totalFase1Etapa1,
                  },
                  etapa2: {
                    totalEtapa: totalFase1Etapa2,
                  },
                  etapa3: {
                    totalEtapa: totalFase1Etapa3,
                  },
                  etapa4: {
                    totalEtapa: totalFase1Etapa4,
                  },
                  totalFase: totalFase1,
                },
                fase2: {
                  etapa1: {
                    totalEtapa: totalFase2Etapa1,
                  },
                  etapa2: {
                    totalEtapa: totalFase2Etapa2,
                  },
                  etapa3: {
                    totalEtapa: totalFase2Etapa3,
                  },
                  etapa4: {
                    totalEtapa: totalFase2Etapa4,
                  },
                  totalFase: totalFase2,
                },
                fase3: {
                  etapa1: {
                    totalEtapa: totalFase3Etapa1,
                  },
                  etapa2: {
                    totalEtapa: totalFase3Etapa2,
                  },
                  etapa3: {
                    totalEtapa: totalFase3Etapa3,
                  },
                  etapa4: {
                    totalEtapa: totalFase3Etapa4,
                  },
                  totalFase: totalFase3,
                },
                fase4: {
                  etapa1: {
                    totalEtapa: totalFase4Etapa1,
                  },
                  etapa2: {
                    totalEtapa: totalFase4Etapa2,
                  },
                  etapa3: {
                    totalEtapa: totalFase4Etapa3,
                  },
                  etapa4: {
                    totalEtapa: totalFase4Etapa4,
                  },
                  totalFase: totalFase4,
                },
              },
              { merge: true }
            )
            .then((docRef) => {})
            .catch((error) => {
              // console.error("Error adding document: ", error);
              console.log("Erro ao cadastrar score do usuário!");
            });

          db.collection("users")
            .doc(userUid)
            .set(
              {
                score: scoreTotal,
              },
              { merge: true }
            )
            .then((docRef) => {})
            .catch((error) => {
              // console.error("Error adding document: ", error);
              console.log(
                "Erro ao cadastrar score do usuário na tabela Users!"
              );
            });
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
    <div className="containerHome">
      <TopBar name={nameUser} />
      <Sidebar />
      <ListPhases />
    </div>
  );
}
