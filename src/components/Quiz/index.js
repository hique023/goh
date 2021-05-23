// Global
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TopBar from '../TopBarPhase'
import Questions from '../Questions'
import Timer from '../Timer'
import QuizStartModal from '../QuizStartModal'
import QuizExitModal from '../QuizExitModal'
import firebase from '../../firebaseConfig.js'

// Assets
import './styles.css'

export default function Quiz() {

    const color = localStorage.getItem('color')
    const nameUser = localStorage.getItem('nameUser')
    const [startQuiz, setStartQuiz] = useState(false)
    const phaseId = localStorage.getItem('phaseId')
    const stageId = localStorage.getItem('stageId')
    const userUid = localStorage.getItem('userUid')
    const history = useHistory()
    const db = firebase.firestore();

    function startQuizModal() {
        console.log('Start Quiz');
        localStorage.setItem('startQuiz', true)
        setStartQuiz(true)
    }

    function cancelQuizModal() {
        history.goBack()
        localStorage.setItem('startQuiz', false)
    }

    function exitQuiz() {
        history.goBack()

        if (phaseId === 'fase1') {
            if (stageId === 'etapa1') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase1: {
                        etapa1: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa2') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase1: {
                        etapa2: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa3') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase1: {
                        etapa3: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa4') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase1: {
                        etapa4: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            }
        } else if (phaseId === 'fase2') {
            if (stageId === 'etapa1') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase2: {
                        etapa1: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa2') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase2: {
                        etapa2: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa3') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase2: {
                        etapa3: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa4') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase2: {
                        etapa4: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            }
        } else if (phaseId === 'fase3') {
            if (stageId === 'etapa1') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase3: {
                        etapa1: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa2') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase3: {
                        etapa2: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa3') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase3: {
                        etapa3: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa4') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase3: {
                        etapa4: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            }
        } else if (phaseId === 'fase4') {
            if (stageId === 'etapa1') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase4: {
                        etapa1: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa2') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase4: {
                        etapa2: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa3') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase4: {
                        etapa3: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            } else if (stageId === 'etapa4') {

                db.collection("quizFinish").doc(userUid).set({
                    // scoreTotal: score,
                    fase4: {
                        etapa4: true
                    }
                }, { merge: true })
                    .then((docRef) => {

                    })
                    .catch((error) => {
                        // console.error("Error adding document: ", error);
                        console.log('Erro ao cadastrar status do quiz do usuário!')
                    });

            }
        }
    }

    return (
        <div className="containerStage">

            <QuizExitModal startQuiz={startQuizModal} exitQuiz={exitQuiz} />

            {startQuiz === false &&
                (<QuizStartModal startQuiz={startQuizModal} cancelQuiz={cancelQuizModal} />)
            }

            {startQuiz === true &&
                (
                    <div>

                        <TopBar name={`Olá, ${nameUser}`} color={color} quiz={true} />

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