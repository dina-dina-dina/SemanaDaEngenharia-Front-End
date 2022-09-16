import { useNavigate } from 'react-router-dom';
import '../../paginas/palestras/palestras.css';
import React, { useState, useContext, useEffect, } from 'react';
import { Modal } from 'react-bootstrap';
import botaopesquisa from '../../assets/lupa.png'
import botaoqrcode from '../../assets/qrcode.png'
import botaodelete from '../../assets/delete.png'
import axios from '../../axios';
import { Link } from 'react-router-dom';


function Palestras() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const [response, setResponse] = useState(Array);


    const [showFornecedor, setShowFornecedor] = useState(false);
    const handleShowFornecedor = () => setShowFornecedor(true);

    const handleCloseFornecedor = () => setShowFornecedor(false)


    const navigate = useNavigate();

    const noResponse = !response || (response && response.length === 0);


    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var idUrl = stringUrl.substring(positionInterrogation + 5);
    idUrl = decodeURIComponent(idUrl);
    console.log(idUrl)


    const get = async () => {
        const response = await axios.get(`/palestras/${idUrl}`)
            .catch(err => console.error('Error: ', err));
        if (response) setResponse(response.data);
        console.log(response)
    }

    const deletePalestra = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar essa Palestra?")) {
            await axios.delete(`/palestras/${id}`).catch(err => alert(err));
            await get();
        }
    }

    useEffect(() => {

        get();
    }, [])

    async function testeqr(event) {





    }
    function handleClick() {
       
        

        navigate(`/novaPalestra?&id=${idUrl}`);
    }
    function professor() {
        navigate("/allAlunos");
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

                        <button id='evento' type='button' onClick={handleClick}>Nova Palestra</button>
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
                        {!noResponse && response.map(function (response) {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{response.nomePalestra ? response.nomePalestra : '-'}</td>
                                            <td>{response.palestrante ? response.palestrante : '-'}</td>
                                            <td>{response.cargaHoraria ? response.cargaHoraria : '-'}</td>


                                            <td style={{width: '30px'}}>

                                                <ul className="botoesTabEntradasVisualizar">
                                                    <Link className="btn1EntradasVisualizar" to={`/alunos?&id=${response.idPalestra}`}><img style={{ width: '42px' }} src={botaopesquisa} alt="visualizar" /></Link>
                                                    <Link className="btn1EntradasVisualizar" to={`/qrcode?&id=${response.idPalestra}`}><img style={{ width: '42px' }} src={botaoqrcode} alt="visualizar" /></Link>

                                                    <li className="btn3EntradasVisualizar" id="hover"><button type ='button' onClick={() => deletePalestra(response.idPalestra)}><img src={botaodelete} alt="deletar" /></button></li>



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
        </div >


    );
}

export default Palestras;
