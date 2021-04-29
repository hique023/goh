// Global
import React, { useEffect, useState, useRef } from 'react'

// Assets
import './styles.css'

export default function Timer() {

    const intervalRef = useRef(null)
    const [timer, setTimer] = useState('00:00')

    function getTimerRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date())
        const seconds = Math.floor((total / 1000) % 60)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const hours = Math.floor((total / 1000 * 60 * 60) % 24)
        const days = Math.floor(total / (1000 * 60 * 60 * 24))

        return {
            total, days, hours, minutes, seconds
        }
    }

    function startTimer(deadline) {
        let { total, days, hours, minutes, seconds } = getTimerRemaining(deadline)
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':' +
                (seconds > 9 ? seconds : '0' + seconds)
            )
        } else {
            clearInterval(intervalRef.current)
        }
    }

    function clearTimer(endtime) {

        setTimer('00:02:00')

        if (intervalRef.current) clearInterval(intervalRef.current)
        const id = setInterval(() => {
            startTimer(endtime)
        }, 1000)
        intervalRef.current = id

    }

    function getDeadlineTime() {
        let deadline = new Date()
        deadline.setSeconds(deadline.getSeconds() + 120)
        return deadline
    }

    useEffect(() => {
        clearTimer(getDeadlineTime())
        return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
    }, [])

    return (

        <div className="containerTimer">
            <h1>
                {timer}
            </h1>
        </div>
    )
}