// Global
import React from 'react'

// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function SubStage(props) {

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="containerSubStage" style={cardStyle}>
            <div className="contentSubStage">
                <div className="leftSubStage">
                    <BiChalkboard size={80} color="black" />
                    <h1>{props.name}</h1>
                    <h1>{props.name}</h1>
                    <h1>{props.name}</h1>
                </div>
                <h1>400 xp</h1>
                <h1>400 xp</h1>
                <h1>400 xp</h1>
            </div>
        </div>
    )
}