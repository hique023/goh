// Global
import React from 'react'
import StageLink from '../StageLink'
import TopBarPhase from '../TopBarPhase'

// Assets
import './styles.css'
import phase01 from '../../assets/phase01.png'
import phase02 from '../../assets/phase02.png'
import phase03 from '../../assets/phase03.png'
import phase04 from '../../assets/phase04.png'

export default function Phase() {

    const phaseId = localStorage.getItem('phaseId')

    return (
        <div className="containerPhase">

            <TopBarPhase />

            <div className="phaseBar">
                <img src={phaseId} />
                <h1>{phaseId}</h1>
                <h1>100xp</h1>
            </div>

            <div className="listStage">
                <StageLink name="Etapa 1" />
                <StageLink name="Etapa 2" />
                <StageLink name="Etapa 3" />
                <StageLink name="Etapa 4" />
            </div>

        </div>
    )
}