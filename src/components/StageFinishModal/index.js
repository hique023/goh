// Global
import React from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { AiOutlineClose } from "react-icons/ai"

export default function StageFinishModal() {

    const history = useHistory()

    function closeModal() {
        history.goBack()
    }

    return (
        <div className="overlay">
            <div className="container">
                <div className="containerHeader">
                    <header>150xp</header>
                </div>

                <div className="containerContent">
                    <strong>Parabéns!</strong>
                    <p>Você finalizou uma etapa.</p>
                </div>

                <button type="button" onClick={closeModal}>
                    <AiOutlineClose size={30} color="black" />
                </button>
            </div>
        </div>
    );
}