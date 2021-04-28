// Global
import React, { useState } from 'react'

// Assets
import './styles.css'

export default function Questions() {

    const [question, setQuestion] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti qui voluptatem quam enim exercitationem accusantium porro, ex quae, fugiat aliquid, laborum aspernatur commodi dicta odit maiores id iusto. Numquam?')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [answerSelected, setAnswerSelected] = useState('')

    return (
        <div className="containerQuestions">
            <div className="contentQuestions">
                <h1>{question}</h1>
            </div>
            <div className="contentAnswers">
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer1'
                        value='answer1'
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer1">Answer 1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer2'
                        value='answer2'
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer2">Answer 2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer3'
                        value='answer3'
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer3">Answer 3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer4'
                        value='answer4'
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer4">Answer 4</label>
                </div>
            </div>

            <h3>Resposta selecionada: {answerSelected}</h3>
        </div>
    )
}