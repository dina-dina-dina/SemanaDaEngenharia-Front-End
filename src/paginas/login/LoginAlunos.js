import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import jpIMG from '../../assets/logosemanaCentrr.png';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';
import image from '../../assets/SemanaEngCirc-removebg.png'

function UserLogin() {
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)
  const navigate = useNavigate();

  function handleClick3() {
    navigate("/cadastro");
  }

  const RegisterUsuario = async () => {
    if (email && senha) {
      try {
        const response = await axiosLogin.post('/authenticate', {
          "email": email,
          "senha": senha,
        })
        console.log(response)
        const token = response.data.token
        localStorage.setItem('authenticated', 'true')
        localStorage.setItem('token', `${token}`)
        localStorage.setItem('user', response.data.user.idUsuarios)
        if (response.data.user.isAdmin == true) {
          navigate("/eventos")
        } else {
          navigate("/AlunosHomePage")
        }
      }
      catch (err) {
        alert('Senha e/ou Usuario incorreto!')
      }
    } else {
      alert('Preencha todos os campos')
    }
  }

  return (
    <>
      <div className='tudo'>
        <div className='fotohome'>
          <img src={jpIMG} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
        </div>

        <div className='formulario'>
          <form>
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
          </form>
          <div className='buttonlogin2'>
                <button onClick={() => handleClick3()}>Cadastre-se!</button>
              </div>
        </div>
      </div>
    </>
  );
}

export default UserLogin;
