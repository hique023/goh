// Global
import React from 'react'
import { Link } from 'react-router-dom'
import StageLink from '../StageLink'

// Assets
import './styles.css'
import { AiOutlineLogout, AiOutlineDoubleLeft } from 'react-icons/ai'

export default function Phase() {

    const phaseId = localStorage.getItem('phaseId')

    return (
        <div className="containerPhase">

            <div className="topBarPhase">
                <div className="leftTopBarPhase">
                    <Link className="back-link" to="/home">
                        <AiOutlineDoubleLeft size={30} color="#FF7989" />
                    </Link>
                    <h1>Olá Pedro</h1>
                </div>
                <div className="rightTopBarPhase">
                    <Link className="back-link" to="/">
                        <AiOutlineLogout size={30} color="#FF7989" />
                    </Link>
                </div>
            </div>
            <div className="phaseBar">
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