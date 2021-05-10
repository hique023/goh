// Global
import React, { useEffect } from 'react'
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
    const stageId = localStorage.getItem('stageId')
    const db = firebase.firestore();


    function getStatus() {

        var docRef = db.collection('status').doc(phaseId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                // setData(data)

                console.log('-----------------------------');
                console.table("Document data:", data);
                console.table("Document data:", data.stageId);
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
                <StageLink name="Etapa 1" stageId="etapa1" color={color} />
                <StageLink name="Etapa 2" stageId="etapa2" color={color} />
                <StageLink name="Etapa 3" stageId="etapa3" color={color} />
                <StageLink name="Etapa 4" stageId="etapa4" color={color} />
            </div>

        </div>
    )
}