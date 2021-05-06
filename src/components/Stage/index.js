// Global
import React from 'react'
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

                <SubStage name="Nota de Qualidade" color={color} />
                <QuizLink name="Quiz" stageId="etapa1" color={color} />
                {/* <SubStage name="Nota de Treinamento" color={color} />
                <SubStage name="Nota de Desafio Complementar" color={color} /> */}

            </div>
        </div>
    )
}