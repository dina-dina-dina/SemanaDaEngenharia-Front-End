import { useNavigate } from 'react-router-dom';
import '../../paginas/eventos/Eventos.css';
import React, { useState, useContext, useEffect } from 'react';



function Eventos() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const navigate = useNavigate();



    return (
        <div className='tudo'>
            <div className="container">

                <div className='acesso'>

                    <div className="usuario">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
                        <button id='icone' class="material-symbols-outlined">
                            account_circle
                        </button>
                        <span>Usuario</span>
                    </div>
                    <div className='novoEvento'>

                        <button id='evento'>Novo Evento</button>
                    </div>
                    <div className='cadastrar'>
                        <button id='evento' >Cadastrar Professor</button>
                    </div>

                </div>



            </div>
            <div className='visualização'>
                <div className='layout'>
                <div className = 'pesquisar'>
                
                </div>
            
                </div>
                
            </div>
        </div>


    );
}

export default Eventos;
