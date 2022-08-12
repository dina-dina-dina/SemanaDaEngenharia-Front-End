import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';



function CadastrarProfessor() {
    const [nome, setNome] = useState(String)
    const [email, setEmail] = useState(String)
    const [turma, setTurma] = useState(String)
    const navigate = useNavigate();
    
    

    function handleClick() {
        navigate("/eventos");
      }

    return (
        <div className='containerNew'>
             
            <div className='formulario2'>
                    <span id = 'tittle'>PROFESSOR</span>
                <div className='itensForms'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle'>Nome</label>
                            <input id='inputStyle' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Email</label>
                            <input id='inputStyle' type={'email'} onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Turmas</label>
                            <select id='inputStyle'  onChange={(event) => setTurma(event.target.value)}></select>
                        </div>
                        <div className='botao' onClick={handleClick}>
                            <button>Cadastrar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default CadastrarProfessor;
