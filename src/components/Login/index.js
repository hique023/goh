import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

// CSS
import './styles.css'

// Assets
import login from '../../assets/login.png'

export default function Logon() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        history.push('/home')
    }

    return (
        <div className="logon-container">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input
                        placeholder='E-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder='Senha'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type='submit'>Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={login} alt="Heroes" />
        </div>
    )
}