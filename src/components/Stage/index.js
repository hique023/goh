// Global
import React, { useState } from 'react'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'
import SubStage from '../SubStage'
import QuizLink from '../QuizLink'

// Assets
import './styles.css'

export default function Stage() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerStage">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar color={color} />

            <div className="listStage">

                <SubStage color={color} qualidade={10} treinamento={5} desafio={8} />
                <QuizLink name="Quiz" stageId="etapa1" color={color} quizScore={20} />

            </div>
        </div>
    )
}