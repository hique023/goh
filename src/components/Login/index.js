// Global
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import firebase from '../../firebaseConfig'

// CSS
import './styles.css'

// Assets
// import login from '../../assets/login.png'

export default function Logon() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const dominio = email.split('@')
    // const dominioValidator = 'cappta.com.br'
    const db = firebase.firestore();

    const history = useHistory()

    useEffect(() => {
        setEmail(localStorage.getItem('email'))
    }, [])

    async function handleLogin(e) {
        e.preventDefault()

        // if (dominio[1] === dominioValidator) {
        console.log('Email válido')
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var userUid = userCredential.user.uid
                console.log(userUid)
                localStorage.setItem('userUid', userUid)
                localStorage.setItem('isLogged', true)

                db.collection('users').doc(userUid).get().then((doc) => {
                    if (doc.exists) {
                        console.log("Document data:", doc.data());

                        const nameUser = doc.data().name
                        const firstName = nameUser.split(' ')
                        const score = doc.data().score
                        const avatar = doc.data().avatar
                        localStorage.setItem('nameUser', firstName[0])
                        localStorage.setItem('email', email)
                        localStorage.setItem('score', score)
                        localStorage.setItem('avatar', avatar)
                        console.log(firstName)
                        history.push('/home')
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                setPassword('')
                var errorMessage = error.message;

                if (errorMessage === "The password is invalid or the user does not have a password.") {
                    errorMessage = 'Senha inválida ou o usuário não possui uma senha válida. Contate o administrador!'
                } else if (errorMessage === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                    errorMessage = 'Não há registro de usuário correspondente ao email informado. Revise o email, caso esteja correto contate o administrador!'
                } else if (errorMessage === "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.") {
                    errorMessage = 'Conta temporariamente desabilitada devido a quantidade de tentativas de login. Aguarde alguns instantes e tente novamente!'
                }

                alert(errorMessage)
            });
        // } else {
        //     alert('Insira seu email corporativo')
        // }

    }

    return (
        <div className="container-master">
            <div className="logon-container">

                <section className="form">

                    <form onSubmit={handleLogin}>
                        {/* <h1>Faça seu login</h1> */}

                        <input
                            placeholder='E-mail'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input
                            placeholder='Senha'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button className="button" type='submit'>Entrar</button>

                        <Link className="back-link" to="/register">
                            <FiLogIn size={16} color="white" />
                            Não tenho cadastro
                        </Link>
                    </form>

                </section>
            </div>
        </div>
    )
}