// Global
import react from 'react'

// Assets
import './styles.css'
import { AiOutlineLogout } from 'react-icons/ai'

export default function TopBar() {
    return (
        <div className="containerBar">
            <div className="contentBar">
                <h1>Olá, Pedro!</h1>
                <AiOutlineLogout size={30} color="#FF7989" />
            </div>
        </div>
    )
}