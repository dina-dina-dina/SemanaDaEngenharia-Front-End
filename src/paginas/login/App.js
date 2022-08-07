import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import jpIMG from '../../assets/SemanaEng.jpg';
import React, { useState, useContext, useEffect } from 'react';



function Login() {
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)
  const navigate = useNavigate();

  function handleClick() {
    navigate("/eventos");
  }


  return (
    <div className="container">
      <div className="login">


        <div className="lateral">
          <img src={jpIMG} alt="semanaEng"></img>
          <h1 id='sds'>Bem - Vindo !</h1>
          <h2 id='sds2'>Acesse sua conta para criar novos eventos</h2>


        </div>
        <div className='formulario'>
          <form>
            <span className='titulo'>Acesse sua Conta</span>
            <div className='input'>

              <div className='email'>
                <label>Email</label>
                <input type='email' placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
              </div>
              <div className='password'>
                <label>Senha</label>
                <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
              </div>
              <div className='button' >
                <button onClick={handleClick} >ENTRAR</button>
              </div>

            </div>

          </form>
        </div>

      </div>

    </div>

  );
}

export default Login;
