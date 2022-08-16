import { useNavigate } from 'react-router-dom';
import '../../paginas/palestras/palestras.css';
import React, { useState, useContext, useEffect } from 'react';
import botaopesquisa from '../../assets/lupa.png'
import botaoqrcode from '../../assets/qrcode.png'
import botaodelete from '../../assets/delete.png'



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

                        <button id='evento' onClick={handleClick}>Nova Palestra</button>
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
                                <th className="cabecalhoEntradasVisualizar">DATA-INICIO</th>
                                <th className="cabecalhoEntradasVisualizar">DATA-FINAL</th>
                                <th className="cabecalhoEntradasVisualizar">DURAÇÃO</th>
                                <th className="cabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{'-'}</td>
                                <td>{'-'}</td>
                                <td>{'-'}</td>
                                <td>{'-'}</td>
                                <td>{'-'}</td>

                                <td>

                                    <ul className="botoesTabEntradasVisualizar">
                                        <li className="btn1EntradasVisualizar" id="hover"><button onClick={Formulario} ><img src={botaopesquisa} alt="botao" /></button></li>
                                        <li className="btn2EntradasVisualizar" id="hover"><button><img src={botaoqrcode} alt="editar" /></button></li>
                                        <li className="btn3EntradasVisualizar" id="hover"><button><img src={botaodelete} alt="deletar" /></button></li>
                
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
            </div>
        </div>


    );
}

export default Palestras;
