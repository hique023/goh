import react from 'react'
import './styles.css'

export default function PhaseLink(props) {
    return (
        <div className="containerPhaseLink">
            <button>{props.name}</button>
        </div>
    )
}