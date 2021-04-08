// Global
import react from 'react'
import { Link } from 'react-router-dom'

// Assets
import './styles.css'
import { AiOutlineLogout } from 'react-icons/ai'

export default function TopBar() {
    return (
        <div className="containerBar">
            <div className="contentBar">
                <h1>Olá, Pedro!</h1>
                <Link to="/">
                    <AiOutlineLogout size={30} color="#FF7989" />
                </Link>
            </div>
        </div>
    )
}