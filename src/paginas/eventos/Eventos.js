import { useNavigate } from 'react-router-dom';
import '../../paginas/eventos/Eventos.css';
import React, { useState, useContext, useEffect } from 'react';
import axios from '../../axios';


function Eventos() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const [alunos, setAlunos] = useState(String)
    const navigate = useNavigate();

    function handleClick() {
        navigate("/novoEvento");
    }
    function professor() {
        navigate("/professor");
    }
    function home() {
        navigate("/");
    }

    const getAlunos = async () => {
        const response = await axios.get('/alunos')
            .catch(err => console.error('Error: ', err));
            if (response) setAlunos(response.data);
            console.log(alunos)
    }

    useEffect(() => {
       
       getAlunos();
   }, [])

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

                        <button id='evento' onClick={handleClick}>Novo Evento</button>
                    </div>
                    <div className='cadastrar'>
                        <button onClick={professor} id='evento' >Cadastrar Professor</button>
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

export default Eventos;