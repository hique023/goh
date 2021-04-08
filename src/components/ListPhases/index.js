// Global
import react from 'react'
import Phase from '../Phases'

// Asssets
import './styles.css'

export default function ListPhases() {
    return (
        <div className="containerListPhases">
            <Phase name="Fase 1" />
            <Phase name="Fase 2" />
            <Phase name="Fase 3" />
            <Phase name="Fase 4" />
        </div>
    )
}