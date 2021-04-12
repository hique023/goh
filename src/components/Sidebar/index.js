// Global
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import './styles.css'
import logo from '../../assets/logo.png'
import { ImHome } from "react-icons/im";
import { GiPodium } from "react-icons/gi";

export default function Sidebar() {
    return (
        <div className="containerSidebar">
            <div className="contentSidebar">
                <div className="logoSidebar">
                    <img src={logo} alt="Logo" />
                </div>
                <Link to="/home">
                    <ImHome className="svgSelect" size={60} color="black" />
                </Link>

                <Link to="/ranking">
                    <GiPodium size={60} color="black" />
                </Link>
            </div>
        </div>
    )
}