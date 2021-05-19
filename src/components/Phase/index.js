// Global
import React, { useEffect, useState } from 'react'
import StageLink from '../StageLink'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'
import firebase from '../../firebaseConfig.js'

// Assets
import './styles.css'

export default function Phase() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const phaseName = localStorage.getItem('phaseName')
    const userUid = localStorage.getItem('userUid')

    const phaseId = localStorage.getItem('phaseId')
    const [data, setData] = useState(null)
    const [statusStage1, setStatusStage1] = useState(null)
    const [statusStage2, setStatusStage2] = useState(null)
    const [statusStage3, setStatusStage3] = useState(null)
    const [statusStage4, setStatusStage4] = useState(null)

    const [scoreSubBar, setScoreSubBar] = useState(0)

    const [totalEtapa1, setTotalEtapa1] = useState(0)
    const [totalEtapa2, setTotalEtapa2] = useState(0)
    const [totalEtapa3, setTotalEtapa3] = useState(0)
    const [totalEtapa4, setTotalEtapa4] = useState(0)

    const db = firebase.firestore();
    // const [stageId, setStageId] = useState(null)

    function getStatus() {

        var docRef = db.collection('status').doc(phaseId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                setData(data)

                console.log('-----------------------------');
                console.table("Document data:", data);
                console.table("Document data:", data.etapa1[0]);
                console.table("Document data:", data.etapa2[0]);
                console.table("Document data:", data.etapa3[0]);
                console.table("Document data:", data.etapa4[0]);

                const status1 = data.etapa1[0]
                const status2 = data.etapa2[0]
                const status3 = data.etapa3[0]
                const status4 = data.etapa4[0]

                console.log('-----------------------------');

                setStatusStage1(status1)
                setStatusStage2(status2)
                setStatusStage3(status3)
                setStatusStage4(status4)
                // console.log(statusStage1);
                // console.log(statusStage2);
                // console.log(statusStage3);
                // console.log(statusStage4);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    function getScore() {

        var docRef = db.collection('score').doc(userUid);

        if (phaseId === 'fase1') {

            docRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    setData(data)
                    console.log(data);

                    const totalFase1Etapa1 = data.fase1.etapa1.totalEtapa
                    const totalFase1Etapa2 = data.fase1.etapa2.totalEtapa
                    const totalFase1Etapa3 = data.fase1.etapa3.totalEtapa
                    const totalFase1Etapa4 = data.fase1.etapa4.totalEtapa
                    const totalFase = data.fase1.totalFase

                    setTotalEtapa1(totalFase1Etapa1)
                    setTotalEtapa2(totalFase1Etapa2)
                    setTotalEtapa3(totalFase1Etapa3)
                    setTotalEtapa4(totalFase1Etapa4)
                    setScoreSubBar(totalFase)

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        } else if (phaseId === 'fase2') {

            docRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    setData(data)
                    console.log(data);

                    const totalFase2Etapa1 = data.fase2.etapa1.totalEtapa
                    const totalFase2Etapa2 = data.fase2.etapa2.totalEtapa
                    const totalFase2Etapa3 = data.fase2.etapa3.totalEtapa
                    const totalFase2Etapa4 = data.fase2.etapa4.totalEtapa
                    const totalFase = data.fase2.totalFase

                    setTotalEtapa1(totalFase2Etapa1)
                    setTotalEtapa2(totalFase2Etapa2)
                    setTotalEtapa3(totalFase2Etapa3)
                    setTotalEtapa4(totalFase2Etapa4)
                    setScoreSubBar(totalFase)

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        } else if (phaseId === 'fase3') {

            docRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    setData(data)
                    console.log(data);

                    const totalFase3Etapa1 = data.fase3.etapa1.totalEtapa
                    const totalFase3Etapa2 = data.fase3.etapa2.totalEtapa
                    const totalFase3Etapa3 = data.fase3.etapa3.totalEtapa
                    const totalFase3Etapa4 = data.fase3.etapa4.totalEtapa
                    const totalFase = data.fase3.totalFase

                    setTotalEtapa1(totalFase3Etapa1)
                    setTotalEtapa2(totalFase3Etapa2)
                    setTotalEtapa3(totalFase3Etapa3)
                    setTotalEtapa4(totalFase3Etapa4)
                    setScoreSubBar(totalFase)

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        } else if (phaseId === 'fase4') {

            docRef.get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data()
                    setData(data)
                    console.log(data);

                    const totalFase4Etapa1 = data.fase4.etapa1.totalEtapa
                    const totalFase4Etapa2 = data.fase4.etapa2.totalEtapa
                    const totalFase4Etapa3 = data.fase4.etapa3.totalEtapa
                    const totalFase4Etapa4 = data.fase4.etapa4.totalEtapa
                    const totalFase = data.fase4.totalFase

                    setTotalEtapa1(totalFase4Etapa1)
                    setTotalEtapa2(totalFase4Etapa2)
                    setTotalEtapa3(totalFase4Etapa3)
                    setTotalEtapa4(totalFase4Etapa4)
                    setScoreSubBar(totalFase)

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });

        }

    }

    useEffect(() => {
        getStatus()
        getScore()
    }, [])

    return (
        <div className="containerPhase">

            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar name={phaseName} color={color} score={scoreSubBar} />

            <div className="listStage">
                <StageLink name="Etapa 1" stageId="etapa1" color={color} status={statusStage1} score={totalEtapa1} />
                <StageLink name="Etapa 2" stageId="etapa2" color={color} status={statusStage2} score={totalEtapa2} />
                <StageLink name="Etapa 3" stageId="etapa3" color={color} status={statusStage3} score={totalEtapa3} />
                <StageLink name="Etapa 4" stageId="etapa4" color={color} status={statusStage4} score={totalEtapa4} />
            </div>

        </div>
    )
}