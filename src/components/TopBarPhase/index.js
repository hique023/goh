// Global
import React from 'react'
import { Link, useHistory } from 'react-router-dom'

// Assets
import './styles.css'
import { AiOutlineLogout, AiOutlineDoubleLeft } from 'react-icons/ai'

export default function TopBarPhase() {

    const history = useHistory()

    function backLink() {
        history.goBack()
    }

    return (
        <div className="topBarPhase">
            <div className="leftTopBarPhase">
                <button onClick={backLink} className="back-link">
                    {/* <Link className="back-link" to="/home"> */}
                    <AiOutlineDoubleLeft size={30} color="#FF7989" />
                    {/* </Link> */}
                </button>
                <h1>Olá Pedro!</h1>
            </div>
            <div className="rightTopBarPhase">
                <Link className="back-link" to="/">
                    <AiOutlineLogout size={50} color="#FF7989" />
                </Link>
            </div>
        </div>
    )
}