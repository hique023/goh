import react from 'react'
import './styles.css'

export default function Phase(props) {
    return (
        <div className="containerPhase">
            <h1>{props.name}</h1>
        </div>
    )
}