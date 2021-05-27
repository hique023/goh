// Global
import React, { useEffect, useState } from 'react'
import TopBar from '../TopBarPhase'
import ListRanking from '../ListRanking'
import firebase from '../../firebaseConfig.js'

// Assets
import './styles.css'

export default function Ranking() {

    const [score, setScore] = useState({ data: [] })
    const db = firebase.firestore();

    function getScore() {

        const count = []

        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                count.push(doc.data())
            });

            setScore({ data: count })
        })
    }

    useEffect(() => {
        getScore()
    }, [])

    return score && (
        <div className="containerRanking">

            <TopBar name="Ranking" />

            {/* <div className="containerRankingSelect">
                <select name="phase">
                    <option value="phase1">Fase 01</option>
                    <option value="phase2">Fase 02</option>
                    <option value="phase3">Fase 03</option>
                    <option value="phase4">Fase 04</option>
                </select>

                <select name="stage">
                    <option value="stage1">Etapa 01</option>
                    <option value="stage2">Etapa 02</option>
                    <option value="stage3">Etapa 03</option>
                    <option value="stage4">Etapa 04</option>
                </select>
            </div> */}

            {score.data.map((item, key) => (
                <div key={key}>
                    <ListRanking name={item.firstName} score={item.score} avatar={item.avatar} />
                </div>
            ))}



        </div>
    )
}