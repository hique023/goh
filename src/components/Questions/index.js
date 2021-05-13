// Global
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebaseConfig.js'
import StageFinishModal from '../StageFinishModal'

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
    const [questionDifficulty, setQuestionDifficulty] = useState(null)
    const [answerSelected, setAnswerSelected] = useState(null)
    const [count, setCount] = useState(1)
    const [score, setScore] = useState(0)

    const color = localStorage.getItem('color')
    const phaseId = localStorage.getItem('phaseId')
    const stageId = localStorage.getItem('stageId')
    const db = firebase.firestore();
    // const history = useHistory()

    const cardStyle = {
        backgroundColor: color || 'var(--green-soft)'
    }

    function nextQuestion() {

        if (answerSelected != null) {
            setCount(count + 1)
            setAnswerSelected(null)
            console.log(count);
            clearRadio()

            if (answerSelected === correctAnswer) {
                setScore(score)
                alert(`Score total: ${score}`);
            } else {
                alert("Errou")
            }
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
                // console.log(count)
                // console.table("Document data:", data);
                // console.table("Document data:", data[1]);

                const pergunta = data[count]
                console.table(pergunta)
                // console.log('-----------------------------');

                const question = pergunta[0]
                const answer01 = pergunta[1]
                const answer02 = pergunta[2]
                const answer03 = pergunta[3]
                const answer04 = pergunta[4]
                const correct = pergunta[5]
                const difficulty = pergunta[6]
                let scoreQuestion = 0
                // console.log(question);
                // console.log(answer1);
                // console.log(answer2);
                // console.log(answer3);
                // console.log(answer4);
                // console.log(correct);
                // console.log(`Dificuldade: ${difficulty}`);
                // console.log(`Score Question: ${scoreQuestion}`);
                setQuestion(question)
                setAnswer1(answer01)
                setAnswer2(answer02)
                setAnswer3(answer03)
                setAnswer4(answer04)
                setCorrectAnswer(correct)
                setQuestionDifficulty(difficulty)

                console.log('----------------------------------');
                console.log('variáveis globais');
                console.log(`Questão: ${question}`);
                console.log(`1: ${answer01}`);
                console.log(`2: ${answer02}`);
                console.log(`3: ${answer03}`);
                console.log(`4: ${answer04}`);
                console.log(`Correta: ${correctAnswer}`);
                console.log(`Dificuldade: ${questionDifficulty}`);
                console.log(`Score: ${score}`);
                console.log('----------------------------------');

                if (difficulty === 'easy') {
                    const easy = 1
                    scoreQuestion = easy
                    console.log(`Score question easy ${scoreQuestion}`);
                } else if (difficulty === 'medium') {
                    const medium = 3
                    scoreQuestion = medium
                    console.log(`Score question medium ${scoreQuestion}`);
                } else if (difficulty === 'hard') {
                    const hard = 6
                    scoreQuestion = hard
                    console.log(`Score question hard ${scoreQuestion}`);
                }

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