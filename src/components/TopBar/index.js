// Global
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import './styles.css'
import { AiOutlineLogout } from 'react-icons/ai'

export default function TopBar(props) {

    const avatar = localStorage.getItem('avatar')

    return (
        <div className="containerBar">
            <div className="contentBar">
                <h1>Olá, {props.name}!</h1>
                <div className="rightBar">
                    <img src={avatar} alt="Avatar" />
                    <Link className="back-link" to="/">
                        <AiOutlineLogout size={50} color="white" />
                    </Link>
                </div>
            </div>
        </div>
    )
}