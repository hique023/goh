// Global
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebaseConfig.js'
import StageFinishModal from '../StageFinishModal'
import QuizStartModal from '../QuizStartModal'

// Assets
import './styles.css'

export default function Questions() {

    const [data, setData] = useState(null)
    const [question, setQuestion] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [answerSelected, setAnswerSelected] = useState(null)
    const [count, setCount] = useState(1)
    const [startQuiz, setStartQuiz] = useState(false)
    const color = localStorage.getItem('color')
    const phaseId = localStorage.getItem('phaseId')
    const stageId = localStorage.getItem('stageId')
    const db = firebase.firestore();
    const history = useHistory()

    const cardStyle = {
        backgroundColor: color || 'var(--green-soft)'
    }

    function nextQuestion() {

        if (answerSelected != null) {
            setCount(count + 1)
            setAnswerSelected(null)
            console.log(count);
            clearRadio()
        }

    }

    function clearRadio() {
        document.getElementById('answer1').checked = false
        document.getElementById('answer2').checked = false
        document.getElementById('answer3').checked = false
        document.getElementById('answer4').checked = false
    }

    function getQuestions() {

        var docRef = db.collection(phaseId).doc(stageId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                setData(data)

                console.log('-----------------------------');
                console.log(count)
                console.table("Document data:", data);
                console.log('Document Status', data.status)
                console.table("Document data:", data[1]);

                const pergunta = data[count]
                console.table(pergunta)
                console.log('-----------------------------');

                const question = pergunta[0]
                const answer1 = pergunta[1]
                const answer2 = pergunta[2]
                const answer3 = pergunta[3]
                const answer4 = pergunta[4]
                const correct = pergunta[5]
                const difficulty = pergunta[6]
                console.log(question);
                console.log(answer1);
                console.log(answer2);
                console.log(answer3);
                console.log(answer4);
                console.log(correct);
                console.log(difficulty);
                setQuestion(question)
                setAnswer1(answer1)
                setAnswer2(answer2)
                setAnswer3(answer3)
                setAnswer4(answer4)
                setCorrectAnswer(correct)
                setDifficulty(difficulty)

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
    }, [count])

    return (
        <div className="containerQuestions">

            {count > 10 && (
                <StageFinishModal />
            )}

            <div className="contentQuestions">
                <h1>{count <= 10 ? (count) : ('10')}. {question}</h1>
            </div>

            <div className="contentAnswers">
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer1'
                        value={answer1}
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer1">{answer1}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer2'
                        value={answer2}
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer2">{answer2}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer3'
                        value={answer3}
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer3">{answer3}</label>
                </div>
                <div>
                    <input
                        type="radio"
                        name="answers"
                        id='answer4'
                        value={answer4}
                        onChange={(e) => { setAnswerSelected(e.target.value) }} />

                    <label htmlFor="answer4">{answer4}</label>
                </div>
            </div>

            <h3>Resposta selecionada: {answerSelected}</h3>

            {count < 10 ? (
                <div className="buttonsQuestions">
                    <button style={cardStyle} onClick={nextQuestion}>Próxima</button>
                </div>
            ) : (
                <div className="buttonsQuestions">
                    <button style={cardStyle} onClick={nextQuestion}>Finalizar</button>
                </div>
            )}

        </div>
    )
}