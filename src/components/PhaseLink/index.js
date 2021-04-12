// Global
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import './styles.css'

export default function PhaseLink(props) {

    const history = useHistory()

    const cardStyle = {
        backgroundColor: props.color || '#FFF'
    }

    function phaseGo() {
        history.push('/phase')
        localStorage.setItem('phaseId', props.name)
    }

    return (
        <div className="containerPhaseLink">
            {/* <button onClick={phaseGo} style={cardStyle}>{props.name}</button> */}
            <button onClick={phaseGo} style={cardStyle}>
                <img src={props.url} alt="Phase" />
            </button>
        </div>
    )
}