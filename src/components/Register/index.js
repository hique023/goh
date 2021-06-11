// Global
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../firebaseConfig.js";

// Assets
import { FiArrowLeft } from "react-icons/fi";
import uploadAvatar from "../../assets/uploadAvatar.png";

// Style
import "./styles.css";

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [group, setGroup] = useState("");
  const [profileImg, setProfileImg] = useState(uploadAvatar);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [score, setScore] = useState(0);
  const [submitButton, setSubmitButton] = useState(true);
  const dominio = email.split("@");
  const dominioValidator = "cappta.com.br";
  const db = firebase.firestore();
  // const [userUid, setUserUid] = useState('')
  // const storage = firebase.storage();

  function validator() {
    console.log("Clicou!");
  }

  function handleRegister(e) {
    e.preventDefault();

    // if (dominio[1] === dominioValidator && group === 'rc' || group === 'fidelizacao' || group === 'onboarding' && avatarUrl != null) {
    if (dominio[1] === dominioValidator && group != null && avatarUrl != null) {
      //   console.log("Email válido");
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const uid = userCredential.user.uid.toString();
          //   console.log(uid);

          // console.log(`Cadastro com sucesso! ${userUid}`)
          // setName('')
          // setEmail('')
          // setPassword('')
          // setGroup('')
          localStorage.setItem("email", email);
          const firstName = name.split(" ");
          localStorage.setItem("nameUser", firstName[0]);
          // console.log('Form enviado')
          // console.log(name)
          // console.log(email)
          // console.log(password)
          // console.log(group)

          db.collection("score")
            .doc(uid)
            .set(
              {
                scoreTotal: score,
                fase1: {
                  etapa1: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa2: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa3: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa4: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  totalFase: 0,
                },
                fase2: {
                  etapa1: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa2: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa3: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa4: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  totalFase: 0,
                },
                fase3: {
                  etapa1: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa2: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa3: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa4: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  totalFase: 0,
                },
                fase4: {
                  etapa1: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa2: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa3: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  etapa4: {
                    qualidade: 0,
                    treinamento: 0,
                    desafio: 0,
                    quiz: 0,
                    totalEtapa: 0,
                  },
                  totalFase: 0,
                },
              },
              { merge: true }
            )
            .then((docRef) => {})
            .catch((error) => {
              // console.error("Error adding document: ", error);
              console.log("Erro ao cadastrar score do usuário!");
            });

          db.collection("quizFinish")
            .doc(uid)
            .set(
              {
                fase1: {
                  etapa1: false,
                  etapa2: false,
                  etapa3: false,
                  etapa4: false,
                },
                fase2: {
                  etapa1: false,
                  etapa2: false,
                  etapa3: false,
                  etapa4: false,
                },
                fase3: {
                  etapa1: false,
                  etapa2: false,
                  etapa3: false,
                  etapa4: false,
                },
                fase4: {
                  etapa1: false,
                  etapa2: false,
                  etapa3: false,
                  etapa4: false,
                },
              },
              { merge: true }
            )
            .then((docRef) => {})
            .catch((error) => {
              // console.error("Error adding document: ", error);
              console.log("Erro ao cadastrar score do usuário!");
            });

          db.collection("users")
            .doc(uid)
            .set({
              name: name,
              firstName: firstName[0],
              email: email,
              group: group,
              avatar: avatarUrl,
              score: score,
              uid: uid,
            })
            .then((docRef) => {
              // alert(`Dados do usuário cadastrados com sucesso!`)
              console.log(avatarUrl);
              localStorage.setItem("avatar", avatarUrl);
              localStorage.setItem("score", score);
              // alert(avatarUrl)
              localStorage.setItem("userUid", uid);
              history.push("/home");
            })
            .catch((error) => {
              // console.error("Error adding document: ", error);
              alert("Erro ao cadastrar dados do usuário!");
            });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorMessage === "Password should be at least 6 characters") {
            errorMessage = "A senha deve conter no mínimo 6 caracteres.";
          }

          alert(errorMessage);
        });
    } else if (dominio[1] !== dominioValidator) {
      alert("Insira seu email corporativo!");
    } else {
      alert("Preencha todos os campos");
    }
  }

  async function imageHandler(e) {
    const reader = new FileReader();

    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(`herois/${file.name}`);

    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setProfileImg(e.target.result);

        fileRef.put(file).then(async () => {
          //   console.log(`Upload do avatar ${file.name}.`);
          await setAvatarUrl(await fileRef.getDownloadURL());
          //   console.log(avatarUrl);
          setSubmitButton(false);
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className="containerRegister">
      <div className="register-container">
        <div className="content">
          <section>
            <h1>Cadastro</h1>
            <p>
              Faça seu cadastro, entre na plataforma e aproveite o que temos a
              oferecer!
            </p>

            <p className="atentionInputs">
              Todos os campos são obrigatórios para realizar o cadastro,
              incluindo a foto do heroi!
            </p>
            <p className="atentionPassword">
              A senha deve conter no mínimo 6 caracteres.
            </p>

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
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="E-mail Corporativo"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="input-group" required>
              <input
                placeholder="Senha"
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <select
                name="group"
                value={group}
                onChange={(e) => {
                  setGroup(e.target.value);
                }}
              >
                <option hidden>Time</option>
                <option value="rc">RC</option>
                <option value="fidelizacao">Fidelização</option>
                <option value="onboarding">Onboarding</option>
              </select>
            </div>

            {submitButton === true ? (
              <button
                className="button"
                type="submit"
                disabled={submitButton}
                style={{ backgroundColor: "var(--block)" }}
              >
                Avatar Pendente
              </button>
            ) : (
              <button className="button" type="submit" disabled={submitButton}>
                Cadastrar
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
