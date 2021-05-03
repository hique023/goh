// Global
import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import './styles.css'
import logo from '../../assets/logo.png'
import { ImHome } from "react-icons/im";
import { GiPodium } from "react-icons/gi";
import { RiWhatsappFill } from "react-icons/ri";

export default function Sidebar() {
    return (
        <div className="containerSidebar">
            <div className="contentSidebar">
                <div className="logoSidebar">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="linksSidebar">
                    <div className="linksTop">
                        <Link to="/home">
                            <ImHome className="svgSelect" size={60} color="black" />
                        </Link>

                        <Link to="/ranking">
                            <GiPodium size={60} color="black" />
                        </Link>
                    </div>

                    <div className="linksBottom">
                        <a href="https://chat.whatsapp.com/KmyYJxN4EdEHg6R2kjYvPX" target='blank' rel="noreferrer noopener">
                            <RiWhatsappFill size={60} color="black" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}