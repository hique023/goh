// Global
import React from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'

export default function QuizExitModal(props) {

    const history = useHistory()

    function exit() {
        props.exitQuiz()
    }

    function keepQuiz() {
        props.startQuiz()
    }

    return (
        <div className="backgroundQuizStartModal">
            <div className="containerQuizStartModal">
                <div className="containerHeader">
                    <header>Deseja abandonar o Quiz?</header>
                    <h2>Se você abandonar o quiz não poderá respondê-lo novamente!</h2>
                </div>

                <div className="containerOptions">
                    <button type="button" className="buttonStart" onClick={exit}>Sim</button>
                    <button type="button" className="buttonClose" onClick={keepQuiz}>Não</button>
                </div>
            </div>
        </div>
    );
}