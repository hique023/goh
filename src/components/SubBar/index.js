// Global
import React from 'react'

// Assets
import './styles.css'

export default function SubBar() {

    // const phaseName = localStorage.getItem('phaseName')
    const subBarName = localStorage.getItem('subBarName')

    return (
        <div className="phaseBar">
            <h1>{subBarName}</h1>
            <h1>100xp</h1>
        </div>
    )
}