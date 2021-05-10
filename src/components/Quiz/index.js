// Global
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TopBar from '../TopBarPhase'
import Questions from '../Questions'
import Timer from '../Timer'
import QuizStartModal from '../QuizStartModal'

// Assets
import './styles.css'

export default function Quiz() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const [startQuiz, setStartQuiz] = useState(false)
    const history = useHistory()

    function startQuizModal() {
        console.log('Start Quiz');
        localStorage.setItem('startQuiz', true)
        setStartQuiz(true)
    }

    function cancelQuizModal() {
        history.goBack()
        localStorage.setItem('startQuiz', false)
    }

    return (
        <div className="containerStage">

            {startQuiz === false &&
                (<QuizStartModal startQuiz={startQuizModal} cancelQuiz={cancelQuizModal} />)
            }

            {startQuiz === true &&
                (
                    <div>

                        <TopBar name={`Olá, ${nameUser}`} color={color} />

                        <div className="timerStage">
                            <Timer />
                        </div>

                        <div className="containerQuestions">
                            <Questions />
                        </div>

                    </div>
                )
            }

        </div>
    )
}