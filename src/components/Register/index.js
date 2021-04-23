// Global
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../firebaseConfig.js'

// Assets
import { FiArrowLeft } from 'react-icons/fi'

// Style
import './styles.css'

export default function Register() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [group, setGroup] = useState('RC')
    const [profileImg, setProfileImg] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
    const dominio = email.split('@')
    const dominioValidator = 'cappta.com.br'

    async function handleRegister(e) {
        e.preventDefault()

        if (dominio[1] === dominioValidator) {
            console.log('Email válido')
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {

                    var user = userCredential.user
                    console.log(user.uid)

                    // firebase.auth().getUserByEmail(email)
                    //     .then((userRecord) => {
                    //         // See the UserRecord reference doc for the contents of userRecord.
                    //         console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
                    //     })
                    //     .catch((error) => {
                    //         console.log('Error fetching user data:', error);
                    //     });


                    alert(`Cadastro com sucesso! ${user}`)
                    // localStorage.setItem('firstName', name)
                    // localStorage.setItem('lastName', lastname)
                    localStorage.setItem('email', email)
                    // localStorage.setItem('activeSession', true)
                    // localStorage.setItem('isLogged', true)
                    console.log('Form enviado')
                    console.log(name)
                    console.log(email)
                    console.log(password)
                    console.log(group)
                    setName('')
                    setEmail('')
                    setPassword('')
                    setGroup('')
                    history.push('/home')
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                });
        } else {
            alert('Insira seu email corporativo')
            setEmail('')
        }

    }

    function imageHandler(e) {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (reader.readyState === 2) {
                setProfileImg(e.target.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return (
        <div className="container">
            <div className="register-container">

                <div className="content">
                    <section>

                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma e aproveite o que temos a oferecer!</p>

                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#e02041" />
                            Já tenho cadastro
                        </Link>
                    </section>
                    <form onSubmit={handleRegister}>

                        <label htmlFor="imageUpload" className="boxImage">

                            <img
                                className="imgProfile"
                                src={profileImg}
                                alt="Imagem de Perfil"
                            />

                            <input
                                className="inputImage"
                                type="file"
                                accept="image/*"
                                name="image-upload"
                                id="imageUpload"
                                onChange={imageHandler}
                            />

                        </label>

                        <input
                            placeholder="Nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <div className="input-group">
                            <input
                                placeholder="Senha"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <select name="group" value={group} onChange={e => { setGroup(e.target.value) }}>
                                <option value="rc">RC</option>
                                <option value="fidelizacao">Fidelização</option>
                                <option value="onboarding">Onboarding</option>
                            </select>
                        </div>

                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}