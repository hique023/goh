// Global
import react from 'react'
import Sidebar from '../Sidebar'
import TopBar from '../TopBar'
import ListPhases from '../ListPhases'

// Assets
import './styles.css'

export default function Home() {
    return (
        <div className="containerHome">
            <TopBar />
            <Sidebar />
            <ListPhases />
        </div>
    )
}