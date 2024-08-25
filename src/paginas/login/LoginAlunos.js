import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import jpIMG from '../../assets/logosemanaCentrr.png';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';
import image from '../../assets/SemanaEngCirc-removebg.png'
import { ClipLoader } from "react-spinners";

function UserLogin() {
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleClick3() {
    navigate("/cadastro");
  }

  const RegisterUsuario = async () => {
 
    if (email && senha) {
      setLoading(true)
      try {

        console.log('foi ?')
        const response = await axiosLogin.post('/authenticate', {
          "email": email,
          "senha": senha,
        })
        console.log(response)
        const token = response.data.token
        await localStorage.setItem('authenticated', 'true')
        await localStorage.setItem('token', `${token}`)
        console.log(token)
        await localStorage.setItem('user', response.data.user.idUsuarios)
        console.log(response)
        if (response.data.user.isAdmin == true) {
          setLoading(false)
          navigate("/eventos")
        } else {
          setLoading(false)
          navigate("/AlunosHomePage")
        }
      }
      catch (err) {
        console.log(err)
        setLoading(false); // Esconde o spinner independentemente do resultado
        alert('Senha e/ou Usuario incorreto!')
     
      }
      
    } else {

      alert('Preencha todos os campos')
    }
  }

  return (
    <>

      {loading ?
        <div className='loading'>
          <ClipLoader
            color='#097828'
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        :
        <div className='tudo'>
          <div className='fotohome'>
            <img src={jpIMG} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
          </div>

          <div className='formulario'>
            <div>
              <div className='tituloide'>Login Semana da Engenharia</div>

              <div className='input'>
                <div className='logincamp'>
                  <label>Email</label>
                  <input type='email' alt="Input de nome" placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
                </div>
                <div className='logincamp'>
                  <label>Senha</label>
                  <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
                </div>
                <div className='buttonlogin' >
                  <button onClick={() => RegisterUsuario()}>ENTRAR</button>
                </div>

              </div>
            </div>
            <div className='buttonlogin2'>
              <button onClick={() => handleClick3()}>Cadastre-se!</button>
            </div>
          </div>
        </div>
      }


    </>
  );
}

export default UserLogin;
