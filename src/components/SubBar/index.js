// Global
import React from 'react'

// Assets
import './styles.css'

export default function SubBar(props) {

    // const phaseName = localStorage.getItem('phaseName')
    // const subBarName = localStorage.getItem('subBarName')

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="subBar" style={cardStyle}>
            <div className="subBarLeft">
                <h1>{props.name}</h1>
            </div>
            <div className="subBarRight">
                <h1>{props.score} xp</h1>
            </div>
        </div>
    )
}