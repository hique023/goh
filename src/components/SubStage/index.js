// Global
import React, { useEffect, useState } from 'react'

// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function SubStage(props) {

    // const [qualidade, setQualidade] = useState(0)
    // const [treinamento, setTreinamento] = useState(0)
    // const [desafio, setDesafio] = useState(0)

    // function getScore() {
    //     setQualidade(props.qualidade)
    //     setTreinamento(props.treinamento)
    //     setDesafio(props.desafio)
    // }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    // useEffect(() => {
    //     getScore()
    // }, [])

    return (
        <div className="containerSubStage" style={cardStyle}>
            <div className="contentSubStage">
                <div className="leftSubStage">
                    <div className="iconSubStage">
                        <BiChalkboard size={80} color="black" />
                    </div>
                    <div className="totalScore">
                        <h1>Nota de Qualidade</h1>
                        <h1>Nota de Treinamento</h1>
                        <h1>Desafio Complementar</h1>
                    </div>
                </div>
                <div className="rightSubBar">
                    <h1>{props.qualidade} xp</h1>
                    <h1>{props.treinamento} xp</h1>
                    <h1>{props.desafio} xp</h1>
                </div>
            </div>
        </div>
    )
}