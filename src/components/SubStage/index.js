// Global
import React from 'react'

// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function SubStage(props) {

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

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
                    <h1>400 xp</h1>
                    <h1>400 xp</h1>
                    <h1>400 xp</h1>
                </div>
            </div>
        </div>
    )
}