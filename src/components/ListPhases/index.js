// Global
import React from 'react'
import PhaseLink from '../PhaseLink'

// Asssets
import './styles.css'

export default function ListPhases() {
    return (
        <div className="containerListPhases">
            <PhaseLink name="Fase 1" color="var(--blue)" />
            <PhaseLink name="Fase 2" color="var(--yellow)" />
            <PhaseLink name="Fase 3" color="var(--wine)" />
            <PhaseLink name="Fase 4" color="var(--green)" />
        </div>
    )
}