import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import jpIMG from '../../assets/SemanaEng.jpg';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';
import image from '../../assets/SemanaEngCirc-removebg.png'



function UserLogin() {
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)
  const navigate = useNavigate();


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
        localStorage.setItem('user',response.data.user.idUsuarios)
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
      <div className='foto'>
        <img src={image} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>

      </div>
      <div className='formulario'>

        <form>

          <div className='tituloide'>Login Senana da Engenharia</div>
          <div className='input'>

            <div className='turma'>
              <label>Email</label>
              <input type='text' alt="Input de nome" placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div className='turma'>
              <label>Senha</label>
              <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
            </div>
            <div className='button' >
              <button type='button' onClick={() => RegisterUsuario()} >ENTRAR</button>
            </div>

          </div>

        </form>
      </div>

    </>



  );
}

export default UserLogin;
