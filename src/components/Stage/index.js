// Global
import React from 'react'
import TopBar from '../TopBarPhase'
import Questions from '../Questions'

// Assets
import './styles.css'

export default function Phase() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerStage">
            <TopBar name={`Olá, ${nameUser}`} color={color} />

            <div className="timerStage">
                <h1>02:00</h1>
            </div>

            <div className="containerQuestions">
                <Questions />
            </div>
        </div>
    )
}