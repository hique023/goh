// Global
import React from 'react'
import TopBar from '../TopBarPhase'
import Questions from '../Questions'
import Timer from '../Timer'

// Assets
import './styles.css'

export default function Quiz() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerStage">
            <TopBar name={`Olá, ${nameUser}`} color={color} />

            <div className="timerStage">
                <Timer />
            </div>

            <div className="containerQuestions">
                <Questions />
            </div>
        </div>
    )
}