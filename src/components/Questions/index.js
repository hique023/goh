// Global
import React, { useEffect, useState } from 'react'
import firebase from '../../firebaseConfig.js'

// Assets
import './styles.css'

export default function Questions() {

    const [question, setQuestion] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corrupti qui voluptatem quam enim exercitationem accusantium porro, ex quae, fugiat aliquid, laborum aspernatur commodi dicta odit maiores id iusto. Numquam?')
    // const [correctAnswer, setCorrectAnswer] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [answerSelected, setAnswerSelected] = useState('')
    const [count, setCount] = useState(1)
    const color = localStorage.getItem('color')
    const phaseId = localStorage.getItem('phaseId')
    const stageId = localStorage.getItem('stageId')
    const db = firebase.firestore();

    const cardStyle = {
        backgroundColor: color || 'var(--green-soft)'
    }

    function nextQuestion() {
        setCount(count + 1)
        console.log(count);
    }

    function getQuestions() {

        var docRef = db.collection(phaseId).doc(stageId);

        docRef.get().then((doc) => {
            if (doc.exists) {
                const data = doc.data()
                const text = `pergunta${count}`
                console.log("Document data:", data);

                console.log('-----------------------------');
                setQuestion(doc.data().pergunta4.pergunta)
                const question = data.text.pergunta
                const answer1 = data.text.resposta1
                const answer2 = data.text.resposta2
                const answer3 = data.text.resposta3
                const answer4 = data.text.resposta4
                console.log(question);
                console.log(answer1);
                console.log(answer2);
                console.log(answer3);
                console.log(answer4);
                setAnswer1(answer1)
                setAnswer2(answer2)
                setAnswer3(answer3)
                setAnswer4(answer4)
                console.log('-----------------------------');
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

            <div className="buttonsQuestions">
                <button style={cardStyle} onClick={nextQuestion}>Próxima</button>
            </div>
        </div>
    )
}