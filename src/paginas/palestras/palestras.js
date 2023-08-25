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

    async function finalizar(){
        const response = await axios.post('/contabilizar/gerarFinal',{
            "idEvento":idUrl
        })
        alert(response.data)
    }

    const deletePalestra = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar essa Palestra?")) {
            await axios.delete(`/palestras/${id}`).catch(err => alert(err));
            await get();
        }
    }

    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
        get();
    }, [])

    function logout() {
        if( window.confirm("Tem certeza que deseja sair ?")){
            localStorage.clear(); 
            navigate("/") 
        }
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
        <>
        <div className='Ptudo'>
            <div className="Pscreen">

                <div className='Pacesso'>

                    <div className="Pusuario">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0" />
                        <button id='icone' class="material-symbols-outlined" type={'button'} onClick={() => logout()}>
                            account_circle
                        </button>
                        <span>Sair</span>
                    </div>
                    <div className='PnovoEvento'>

                        <button id='evento' type='button' onClick={handleClick}>Nova Palestra</button>
                    </div>
                    <div className='Pcadastrar'>
                        <button onClick={professor} id='evento' >Encerrar Evento</button>
                    </div>

                </div>
            </div>

            <div className='Pvisualização'>
                <div className="Ptabela">
                    <table className="PrTableEntradasVisualizar">
                        <thead>
                            <tr>
                                <th className="PcabecalhoEntradasVisualizar">NOME</th>
                                <th className="PcabecalhoEntradasVisualizar">PALESTRANTE</th>
                                <th className="PcabecalhoEntradasVisualizar">DURAÇÃO</th>
                                <th className="PcabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        {!noResponse && response.map(function (response) {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{response.palestra.nomePalestra ? response.palestra?.nomePalestra : '-'}</td>
                                            <td>{response.palestra.palestrante ? response.palestra?.palestrante : '-'}</td>
                                            <td>{response.palestra.cargaHoraria ? response.palestra?.cargaHoraria : '-'}</td>

                                            <td style={{ width: '30px' }}>
                                                <ul className="PbotoesTabEntradasVisualizar">
                                                    <Link className="Pbtn1EntradasVisualizar" to={`/alunos?&id=${response.idPalestra}`}><img style={{ width: '42px' }} src={botaopesquisa} alt="visualizar" /></Link>
                                                    <li className="Pbtn3EntradasVisualizar" id="hover"><button type='button' onClick={() => deletePalestra(response.idPalestra)}><img src={botaodelete} alt="deletar" /></button></li>
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
        <div className='phonediv'>
                <div className='headerdiv' >
                    <div className='buttonhome3'  >
                        <button type='button' onClick={() => logout()} style={{ backgroundColor: '#737373' }}>LOGOUT</button>
                    </div>
                    <div className='buttonhome3' >
                        <button type='button' style={{ backgroundColor: '#36a555', paddingRight: '5%', paddingLeft: '5%' }}  onClick={handleClick}>NOVA PALESTRA</button>
                    </div>
                    <div className='buttonhome3' >
                        <button type='button' onClick={() => finalizar()}  style={{ backgroundColor: '#65BABB', paddingRight: '5%', paddingLeft: '5%' }}>FIN. EVENTO</button>
                    </div>

                </div>
               
                <div className="Ptabela">
                    <table className="PrTableEntradasVisualizar">
                        <thead>
                            <tr>
                                <th className="PcabecalhoEntradasVisualizar">NOME</th>
                                <th className="PcabecalhoEntradasVisualizar">PALESTRANTE</th>
                                <th className="PcabecalhoEntradasVisualizar">DURAÇÃO</th>
                                <th className="PcabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        {!noResponse && response.map(function (response) {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{response.palestra.nomePalestra ? response.palestra?.nomePalestra : '-'}</td>
                                            <td>{response.palestra.palestrante ? response.palestra?.palestrante : '-'}</td>
                                            <td>{response.palestra.cargaHoraria ? response.palestra?.cargaHoraria : '-'}</td>

                                            <td>
                                                <ul className="PbotoesTabEntradasVisualizar">
                                                    <Link className="Pbtn1EntradasVisualizar" to={`/alunos?&id=${response.idPalestra}`}><img style={{ width: '15vw' }} src={botaopesquisa} alt="visualizar" /></Link>
                                                    <li className="Pbtn3EntradasVisualizar" id="hover"><button type='button' onClick={() => deletePalestra(response.idPalestra)}><img style={{ width: '15vw' }} src={botaodelete} alt="deletar" /></button></li>
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
        </>
        
    );
}

export default Palestras;
