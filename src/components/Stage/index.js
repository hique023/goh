// Global
import React from 'react'
import TopBarPhase from '../TopBarPhase'
import SubBar from '../SubBar'
import StageLink from '../StageLink'
import QuizLink from '../QuizLink'

// Assets
import './styles.css'

export default function Stage() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')

    return (
        <div className="containerStage">
            <TopBarPhase name={`Olá, ${nameUser}`} color={color} />

            <SubBar />

            <div className="listStage">

                <div className="contentStageLink">
                    <button>
                        <div className="leftStageLink">
                            {/* <BiChalkboard size={80} color="black" /> */}
                            <h1>props.name</h1>
                        </div>
                        <h1>400 xp</h1>
                    </button>
                </div>

                {/* <QuizLink name="Etapa 1" stageId="etapa1" color={color} />
                <StageLink name="Etapa 2" stageId="etapa2" color={color} />
                <StageLink name="Etapa 3" stageId="etapa3" color={color} /> */}
                <QuizLink name="Quiz" stageId="etapa1" color={color} />
            </div>
        </div>
    )
}