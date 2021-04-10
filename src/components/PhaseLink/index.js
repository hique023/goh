// Global
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import './styles.css'

export default function PhaseLink(props) {

    const history = useHistory()

    function phaseGo() {
        history.push('/phase')
        localStorage.setItem('phaseId', props.name)
    }


    return (
        <div className="containerPhaseLink">
            <button onClick={phaseGo}>{props.name}</button>
        </div>
    )
}