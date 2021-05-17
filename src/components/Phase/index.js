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
    const phaseName = localStorage.getItem('subBarName')

    const phaseId = localStorage.getItem('phaseId')
    const [data, setData] = useState(null)
    const [statusStage1, setStatusStage1] = useState(null)
    const [statusStage2, setStatusStage2] = useState(null)
    const [statusStage3, setStatusStage3] = useState(null)
    const [statusStage4, setStatusStage4] = useState(null)
    // const [stageId, setStageId] = useState(null)

    const db = firebase.firestore();


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

    useEffect(() => {
        getStatus()
    }, [])

    return (
        <div className="containerPhase">

            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar name={phaseName} color={color} />

            <div className="listStage">
                <StageLink name="Etapa 1" stageId="etapa1" color={color} status={statusStage1} />
                <StageLink name="Etapa 2" stageId="etapa2" color={color} status={statusStage2} />
                <StageLink name="Etapa 3" stageId="etapa3" color={color} status={statusStage3} />
                <StageLink name="Etapa 4" stageId="etapa4" color={color} status={statusStage4} />
            </div>

        </div>
    )
}