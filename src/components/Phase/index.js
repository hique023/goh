import React from 'react'

export default function Phase() {

    const phaseId = localStorage.getItem('phaseId')

    return (
        <h1>{phaseId}</h1>
    )
}