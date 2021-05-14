// Global
import React from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'

export default function QuizStartModal(props) {

    const history = useHistory()

    function start() {
        props.startQuiz()
    }

    function cancel() {
        props.cancelQuiz()
    }

    return (
        <div className="backgroundQuizStartModal">
            <div className="containerQuizStartModal">
                <div className="containerHeader">
                    <header>Deseja iniciar o Quiz?</header>
                    <h2>Você terá apenas uma chance, verifique sua conexão com a internet e reserve 10min para a realização do quiz. Ao todo são 10 questões com níveis de dificuldade diferentes.</h2>
                </div>

                <div className="containerOptions">
                    <button type="button" className="buttonStart" onClick={start}>Sim</button>
                    <button type="button" className="buttonClose" onClick={cancel}>Não</button>
                </div>
            </div>
        </div>
    );
}