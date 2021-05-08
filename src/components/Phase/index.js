// Global
import React from 'react'
import StageLink from '../StageLink'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'

// Assets
import './styles.css'

export default function Phase() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const phaseName = localStorage.getItem('subBarName')

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