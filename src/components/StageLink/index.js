// Global
import React from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function StageLink(props) {

    const history = useHistory()

    function goStage() {
        history.push('/stage')
    }

    return (
        <div className="containerStageLink">
            <div className="contentStageLink">
                <button onClick={goStage}>
                    <div className="leftStageLink">
                        <BiChalkboard size={80} color="black" />
                        <h1>{props.name}</h1>
                    </div>
                    <h1>400 xp</h1>
                </button>
            </div>
        </div>
    )
}