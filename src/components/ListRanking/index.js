// Global
import React from 'react'

// Assets
import './styles.css'
import image from '../../assets/backgroundregister.png'

export default function ListRanking() {
    return (
        <div className="containerListRanking">

            <div className="containerListRankingLeft">
                <img src={image} alt="Avatar" />
                <h1>Heroi</h1>
            </div>
            <div className="containerListRankingRight">
                <h1>850px</h1>
            </div>
        </div>
    )
}