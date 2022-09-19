import { useNavigate } from 'react-router-dom';
import '../../paginas/eventos/Eventos.css';
import React, { useState, useContext, useEffect } from 'react';
import axios from '../../axios';
import fundo from '../../assets/teste.png'


function Eventos() {
    // const [email, setEmail] = useState(String)
    // const [senha, setSenha] = useState(String)
    const [eventos, setEventos] = useState(Array)

    const navigate = useNavigate();
    const noResponse = !eventos || (eventos && eventos.length === 0);
    function handleClick() {
        navigate("/novoEvento");
    }
    function professor() {
        navigate("/professor");
    }
    function home() {
        navigate("/");
    }
    function redirecionar(id) {
        navigate(`/palestras?&id=${id}`);
        
    }

    function logout() {
        if( window.confirm("Tem certeza que deseja sair ?")){
            localStorage.clear(); 
            navigate("/") 
    
        }
       
    }

    const getEventos = async () => {
        const response = await axios.get('/evento')
            .catch(err => console.error('Error: ', err));
        if (response) setEventos(response.data);
        console.log(response)
    }

    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');

        getEventos();
    }, [])

    return (
        <div className='tudo'>
            <div className="screen">

                <div className='acesso'>

                    <div className="usuario">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
                        <button id='icone' class="material-symbols-outlined" type={'button'} onClick={() => logout()}>
                            account_circle
                        </button>
                        <span>Sair</span>
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
                <div className='ever' >


                    {/* <div className='cards'>
                        <div className='tituloEvento'>
                            <h1>Eventos Encerrados</h1>
                        </div>

                        {!noResponse && eventos.map(function (response) {
                            return (
                                <>
                                    <ul className='ulCard'>

                                        <li className='liCard'>
                                            <div className='espaço' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                <div style={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {/* <h1 style={{  width:'330px', backgroundColor:'red', height: '50px' ,overflow:'hidden', textOverflow:'ellipsis', fontSize:'50px'}}>
                                                    {response.nomeEvento}
                                                </h1> */}

                    {/* <button id='botaoCard' type='button' onClick={() => redirecionar(response.idEvento)} style={{ position: 'relative', background: fundo }} className='evento'> {response.nomeEvento}</button>
                                                </div>





                                            </div>


                                        </li>






                                    </ul> */}






                    {/* </>
                            )
                        })
                        } */}
                    {/* </div> */}
                    <div className='pesquisar'>
                        <div className='tituloEvento'>
                            <h1>Eventos Atuais</h1>
                        </div>
                        {!noResponse && eventos.map(function (response) {
                            return (
                                <>
                                    <ul className='ulCard'>

                                        <li className='liCard'>
                                            <div className='espaço' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                <div style={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {/* <h1 style={{  width:'330px', backgroundColor:'red', height: '50px' ,overflow:'hidden', textOverflow:'ellipsis', fontSize:'50px'}}>
                                                    {response.nomeEvento}
                                                </h1> */}

                                                    <button id='botaoCard' type='button' onClick={() => redirecionar(response.idEvento)} style={{ position: 'relative', background: fundo }} className='evento'> {response.nomeEvento}</button>
                                                </div>





                                            </div>


                                        </li>






                                    </ul>






                                </>
                            )
                        })
                        }

                    </div>

                </div>

            </div>
        </div>


    );
}

export default Eventos;
