// Global
import React from 'react'
import TopBar from '../TopBarPhase'
import ListRanking from '../ListRanking'

// Assets
import './styles.css'

export default function Ranking() {
    return (
        <div className="containerRanking">

            <TopBar name="Ranking" />

            <div className="containerRankingSelect">
                <select name="phase">
                    <option value="phase1">Fase 01</option>
                    <option value="phase2">Fase 02</option>
                    <option value="phase3">Fase 03</option>
                    <option value="phase4">Fase 04</option>
                </select>

                <select name="stage">
                    <option value="stage1">Etapa 01</option>
                    <option value="stage2">Etapa 02</option>
                    <option value="stage3">Etapa 03</option>
                    <option value="stage4">Etapa 04</option>
                </select>
            </div>

            <ListRanking />
            <ListRanking />
            <ListRanking />
            <ListRanking />
            <ListRanking />
            <ListRanking />
            <ListRanking />
            <ListRanking />
            <ListRanking />
        </div>
    )
}