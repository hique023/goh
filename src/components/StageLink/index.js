// Global
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function StageLink(props) {

    const history = useHistory()
    const [score, setScore] = useState(0)

    function goStage() {
        localStorage.setItem('stageId', props.stageId)
        localStorage.setItem('subBarName', props.name)
        history.push('/stage')
    }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="containerStageLink" style={cardStyle}>
            <div className="contentStageLink">
                <button onClick={goStage} id="buttonStage" disabled={props.status}>
                    <div className="leftStageLink">
                        <BiChalkboard size={80} color="black" />
                        <h1>{props.name}</h1>
                    </div>
                    <h1>{score} xp</h1>
                </button>
            </div>
        </div>
    )
}