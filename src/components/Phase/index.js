// Global
import React from 'react'
import StageLink from '../StageLink'
import TopBarPhase from '../TopBarPhase'

// Assets
import './styles.css'

export default function Phase() {

    const phaseId = localStorage.getItem('phaseId')
    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerPhase">

            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <div className="phaseBar">
                <h1>{phaseId}</h1>
                <h1>100xp</h1>
            </div>

            <div className="listStage">
                <StageLink name="Etapa 1" color={color} />
                <StageLink name="Etapa 2" color={color} />
                <StageLink name="Etapa 3" color={color} />
                <StageLink name="Etapa 4" color={color} />
            </div>

        </div>
    )
}