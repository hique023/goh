// Global
import React, { useEffect, useState } from 'react';
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
    const [avatarUrl, setAvatarUrl] = useState('')
    const [score, setScore] = useState(0)
    const dominio = email.split('@')
    const dominioValidator = 'cappta.com.br'
    const db = firebase.firestore();
    // const [userUid, setUserUid] = useState('')
    // const storage = firebase.storage();


    function handleRegister(e) {
        e.preventDefault()

        if (dominio[1] === dominioValidator && group === 'rc' || group === 'fidelizacao' || group === 'onboarding' && avatarUrl != null) {
            console.log('Email válido')
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {

                    const uid = userCredential.user.uid.toString()
                    console.log(uid)

                    // console.log(`Cadastro com sucesso! ${userUid}`)
                    // setName('')
                    // setEmail('')
                    // setPassword('')
                    // setGroup('')
                    localStorage.setItem('email', email)
                    const firstName = name.split(' ')
                    localStorage.setItem('nameUser', firstName[0])
                    console.log('Form enviado')
                    console.log(name)
                    console.log(email)
                    console.log(password)
                    console.log(group)

                    db.collection("users").doc(uid).set({
                        name: name,
                        firstName: firstName[0],
                        email: email,
                        group: group,
                        avatar: avatarUrl,
                        score: score,
                        uid: uid
                    })
                        .then((docRef) => {
                            // alert(`Dados do usuário cadastrados com sucesso!`)
                            console.log(avatarUrl)
                            localStorage.setItem('avatar', avatarUrl)
                            localStorage.setItem('score', score)
                            // alert(avatarUrl)
                            history.push('/home')
                        })
                        .catch((error) => {
                            // console.error("Error adding document: ", error);
                            alert('Erro ao cadastrar dados do usuário!')
                        });

                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorMessage)
                });
        } else {
            alert('Preencha todos os campos')
        }
    }

    async function imageHandler(e) {
        const reader = new FileReader();

        const file = e.target.files[0]
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(`herois/${file.name}`)

        reader.onload = (e) => {
            if (reader.readyState === 2) {
                setProfileImg(e.target.result)

                fileRef.put(file).then(async () => {
                    console.log(`Upload do avatar ${file.name}.`)
                    await setAvatarUrl(await fileRef.getDownloadURL())
                    console.log(avatarUrl)
                })
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
                                required
                                onChange={imageHandler}
                            />

                        </label>

                        <input
                            placeholder="Nome"
                            value={name}
                            required
                            onChange={e => setName(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="E-mail Corporativo"
                            value={email}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />

                        <div className="input-group" required>
                            <input
                                placeholder="Senha"
                                type="password"
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />

                            <select name="group" value={group} onChange={e => { setGroup(e.target.value) }}>
                                <option hidden>Time</option>
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