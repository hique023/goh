// Global
import React from 'react'
import PhaseLink from '../PhaseLink'

// Asssets
import './styles.css'
import phase1 from '../../assets/phase1.png'
import phase2 from '../../assets/phase2.png'
import phase3 from '../../assets/phase3.png'
import phase4 from '../../assets/phase4.png'

export default function ListPhases() {
    return (
        <div className="containerListPhases">
            <PhaseLink name="Fase 01" url={phase1} color="var(--blue)" />
            <PhaseLink name="Fase 02" url={phase2} color="var(--yellow)" />
            <PhaseLink name="Fase 03" url={phase3} color="var(--wine)" />
            <PhaseLink name="Fase 04" url={phase4} color="var(--green)" />
        </div>
    )
}