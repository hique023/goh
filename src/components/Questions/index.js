// Global
import React, { useEffect, useState } from 'react'
import firebase from '../../firebaseConfig.js'

// Assets
import './styles.css'

export default function Questions() {

    const [question, setQuestion] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti qui voluptatem quam enim exercitationem accusantium porro, ex quae, fugiat aliquid, laborum aspernatur commodi dicta odit maiores id iusto. Numquam?')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [answerSelected, setAnswerSelected] = useState('')
    const color = localStorage.getItem('color')
    const phaseId = localStorage.getItem('phaseId')
    const stageId = localStorage.getItem('stageId')
    const db = firebase.firestore();

    const cardStyle = {
        backgroundColor: color || 'var(--green-soft)'
    }

    function getQuestions() {

        var docRef = db.collection(phaseId).doc(stageId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }

    useEffect(() => {
        getQuestions()
    }, [])

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

            <div className="buttonsQuestions">
                <button style={cardStyle}>Próxima</button>
            </div>
        </div>
    )
}