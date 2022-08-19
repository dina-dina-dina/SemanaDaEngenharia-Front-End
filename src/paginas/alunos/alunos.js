import { useNavigate } from 'react-router-dom';
import '../../paginas/palestras/palestras.css';
import React, { useState, useContext, useEffect } from 'react';
import botaopesquisa from '../../assets/lupa.png'
import botaoqrcode from '../../assets/qrcode.png'
import botaodelete from '../../assets/delete.png'
import axios from '../../axios';



function Alunos() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const [response, setResponse] = useState(Array);


    const navigate = useNavigate();

    const noResponse = !response || (response && response.length === 0);


    const get = async () => {
        const response = await axios.get('/palestras')
            .catch(err => console.error('Error: ', err));
        if (response) setResponse(response.data);
        console.log(response)
    }

    useEffect(() => {

        get();
    }, [])


    function handleClick() {
        navigate("/novaPalestra");
    }
    function professor() {
        navigate("/professor");
    }
    function home() {
        navigate("/");
    }

    function Formulario() {
        navigate("/formulario");
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

                        <button id='evento' onClick={handleClick}>Alunos</button>
                    </div>
                    <div className='cadastrar'>
                        <button onClick={professor} id='evento' >Encerrar Evento</button>
                    </div>

                </div>



            </div>
            <div className='visualização'>
                <div className="tabela">
                    <table className="rTableEntradasVisualizar">
                        <thead>
                            <tr>
                                <th className="cabecalhoEntradasVisualizar">NOME</th>
                                <th className="cabecalhoEntradasVisualizar">PALESTRANTE</th>
                                <th className="cabecalhoEntradasVisualizar">DURAÇÃO</th>
                                <th className="cabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        {!noResponse &&response.map(function (response) {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{response.nomePalestra ? response.nomePalestra : '-'}</td>
                                            <td>{response.palestrante ? response.palestrante : '-'}</td>
                                            <td>{response.cargaHoraria ? response.cargaHoraria :'-'}</td>
                                            

                                            <td>

                                                <ul className="botoesTabEntradasVisualizar">
                                                    <li className="btn1EntradasVisualizar" id="hover"><button onClick={Formulario} ><img src={botaopesquisa} alt="botao" /></button></li>
                                                    <li className="btn2EntradasVisualizar" id="hover"><button><img src={botaoqrcode} alt="editar" /></button></li>
                                                    <li className="btn3EntradasVisualizar" id="hover"><button><img src={botaodelete} alt="deletar" /></button></li>

                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                        }


                    </table>
                </div>

            </div>
        </div>


    );
}

export default Alunos;