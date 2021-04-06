// Global
import react from 'react'
import Sidebar from '../Sidebar'
import TopBar from '../TopBar'

// Assets
import './styles.css'

export default function Home() {
    return (
        <div className="containerHome">
            <TopBar />
            <Sidebar />
            {/* <h1>Home</h1> */}
        </div>
    )
}