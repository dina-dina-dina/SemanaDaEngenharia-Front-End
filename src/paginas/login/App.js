import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import jpIMG from '../../assets/SemanaEng.jpg';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';



function LoginAdmin() {
  const [email, setEmail] = useState(String)
  const [senha, setSenha] = useState(String)
  const navigate = useNavigate();

  function handleClick() {
    navigate("/eventos");
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
            if(response.user.isAdmin == 1) {
              navigate("/eventos")
            }else{
              navigate("/paginaAlunos")
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
    <div className="container">
      <div className="login">


        <div className="lateral">
          <img src={jpIMG} alt="semanaEng"></img>
          <h1 id='sds'>Bem - Vindo !</h1>
          <h2 id='sds2'>Acesse sua conta para criar novos eventos</h2>


        </div>
        <div className='formulario'>
          <form>
            <span className='titulo'>ADMIN LOGIN</span>
            <div className='input'>

              <div className='email'>
                <label>Email</label>
                <input type='email' alt="Input de email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
              </div>
              <div className='password'>
                <label>Senha</label>
                <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
              </div>
              <div className='button' >
                <button  type = 'button' onClick={()=> RegisterUsuario()} >ENTRAR</button>
              </div>

            </div>

          </form>
        </div>

      </div>

    </div>

  );
}

export default LoginAdmin;
