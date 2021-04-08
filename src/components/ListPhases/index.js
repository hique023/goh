// Global
import react from 'react'
import PhaseLink from '../PhaseLink'

// Asssets
import './styles.css'

export default function ListPhases() {
    return (
        <div className="containerListPhases">
            <PhaseLink name="Fase 1" />
            <PhaseLink name="Fase 2" />
            <PhaseLink name="Fase 3" />
            <PhaseLink name="Fase 4" />
        </div>
    )
}