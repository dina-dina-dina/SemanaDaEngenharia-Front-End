import { useNavigate } from 'react-router-dom';
import '../../paginas/eventos/Eventos.css';
import React, { useState, useContext, useEffect } from 'react';



function Palestras() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const navigate = useNavigate();

    function handleClick() {
        navigate("/novaPalestra");
    }
    function professor() {
        navigate("/professor");
    }
    function home() {
        navigate("/");
    }

    return (
        <div className='tudo'>
            <div className="screen">

                <div className='acesso'>

                    <div className="usuario">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
                        <button id='icone' class="material-symbols-outlined" onClick={home}>
                            account_circle
                        </button>
                        <span>Usuario</span>
                    </div>
                    <div className='novoEvento'>

                        <button id='evento' onClick={handleClick}>Nova Palestra</button>
                    </div>
                    <div className='cadastrar'>
                        <button onClick={professor} id='evento' >Encerrar Evento</button>
                    </div>

                </div>



            </div>
            <div className='visualização'>
                <div className='layout'>
                    <div className='pesquisar'>

                    </div>

                </div>

            </div>
        </div>


    );
}

export default Palestras;
