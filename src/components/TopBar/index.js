// Global
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import './styles.css'
import { AiOutlineLogout } from 'react-icons/ai'

export default function TopBar(props) {
    return (
        <div className="containerBar">
            <div className="contentBar">
                <h1>Olá, {props.name}!</h1>
                <Link className="back-link" to="/">
                    <AiOutlineLogout size={50} color="white" />
                </Link>
            </div>
        </div>
    )
}