// Global
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { BiChalkboard } from "react-icons/bi";

export default function QuizLink(props) {

    const history = useHistory()

    function goQuiz() {
        history.push('/quiz')
    }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="containerQuizLink" style={cardStyle}>
            <div className="contentQuizLink">
                <button onClick={goQuiz}>
                    <div className="leftQuizLink">
                        <BiChalkboard size={80} color="black" />
                        <h1>{props.name}</h1>
                    </div>
                    <h1>400 xp</h1>
                </button>
            </div>
        </div>
    )
}