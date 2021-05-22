// Global
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { FiEdit } from "react-icons/fi";

export default function QuizLink(props) {

    // const [quizScore, setQuizScore] = useState(0)
    const history = useHistory()

    // function getScore() {
    //     setQuizScore(props.quizScore)
    // }

    function goQuiz() {
        history.push('/quiz')
    }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    // useEffect(() => {
    //     getScore()
    // }, [])

    return (
        <div className="containerQuizLink" style={cardStyle}>
            <div className="contentQuizLink">
                <button onClick={goQuiz} disabled={props.statusQuiz}>
                    <div className="leftQuizLink">

                        {props.statusQuiz === false ? (
                            <FiEdit size={80} color="var(--green-soft)" />
                        ) : (
                            <FiEdit size={80} color="var(--block)" />
                        )}

                        {props.statusQuiz === false ? (
                            <h1>{props.name} Pendente</h1>
                        ) : (
                            <h1>{props.name} Respondido</h1>
                        )}

                    </div>
                    <h1>{props.quizScore} xp</h1>
                </button>
            </div>
        </div>
    )
}