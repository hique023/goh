// Global
import React from 'react'
import TopBar from '../TopBarPhase'

// Assets
import './styles.css'

export default function Phase() {

    const color = localStorage.getItem('color')

    return (
        <div className="containerStage">
            <TopBar name="Olá, Pedro!" color={color} />

            <div className="timerStage">
                <h1>02:00</h1>
            </div>
        </div>
    )
}