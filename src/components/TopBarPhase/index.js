// Global
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { AiOutlineLogout } from 'react-icons/ai'
import { IoArrowBack } from 'react-icons/io5'

export default function TopBarPhase(props) {

    const history = useHistory()

    function backLink() {
        history.goBack()
    }

    const cardStyle = {
        backgroundColor: props.color || 'var(--green-soft)'
    }

    return (
        <div className="topBarPhase" style={cardStyle}>
            <div className="leftTopBarPhase" style={cardStyle}>
                <button onClick={backLink} className="back-link">
                    <IoArrowBack size={30} color="white" />
                </button>
                <h1>{props.name}</h1>
            </div>
            {/* <div className="rightTopBarPhase">
                <Link className="back-link" to="/">
                    <AiOutlineLogout size={50} color="white" />
                </Link>
            </div> */}
        </div>
    )
}