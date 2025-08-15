import { useNavigate } from 'react-router-dom';
import '../../paginas/palestras/palestras.css';
import React, { useState, useContext, useEffect } from 'react';
import botaopesquisa from '../../assets/lupa.png'
import botaoqrcode from '../../assets/qrcode.png'
import botaodelete from '../../assets/delete.png'
import axios from '../../axios';
import { Link } from 'react-router-dom';


function Alunos() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const [response, setResponse] = useState(Array);
    const [responseTurmaFind, setResponseTurmaFind] = useState(Array);


    const navigate = useNavigate();



    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var positionCommercialE = stringUrl.indexOf("&");
    var idUrl = stringUrl.substring(positionCommercialE + 4);
    idUrl = decodeURIComponent(idUrl);
    console.log(idUrl)

    const get = async () => {
        const queryParams = {
            param1: idUrl
        }
        const response = await axios.get('/checkData/listapalestra', { params: queryParams })
            .catch(err => console.error('Error: ', err));
        if (response) setResponse(response.data);
        console.log(response.data)
    }

    const noResponse = !response || (response && response.length === 0);

    async function getFeedback(id){

      const queryParams = {
            param1:id
        }
        const response = await axios.get('/checkData/feedback', { params: queryParams })
            .catch(err => console.error('Error: ', err));
        if (response) setResponseTurmaFind(response.data);
        console.log(response)
        return (response.data)
    }


    const getTurmas = async () => {
        const response = await axios.get('/turma')
            .catch(err => console.error('Error: ', err));
        if (response) setResponseTurmaFind(response.data);
        console.log(response)
    }

    const deleteAluno = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar esse Aluno?")) {
            await axios.delete(`/formulario/${id}`, { data: { idPalestra: idUrl } }

            ).catch(err => alert(err));
            await get();
        }
    }


    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
        getTurmas();
        get();
    }, [])

    function logout() {
        if (window.confirm("Tem certeza que deseja sair ?")) {
            localStorage.clear();
            navigate("/")

        }


    }

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
                    
                    

                </div>



            </div>
            <div className='Pvisualização'>
                <div className="Ptabela">
                    <table className="PrTableEntradasVisualizar">
                        <thead>
                            <tr>
                                <th className="PcabecalhoEntradasVisualizar">NOME</th>
                                <th className="PcabecalhoEntradasVisualizar">RA</th>
                                <th className="PcabecalhoEntradasVisualizar">EMAIL</th>
                                <th className="PcabecalhoEntradasVisualizar">CURSO</th>
                                <th className="PcabecalhoEntradasVisualizar">TURMA</th>
                                <th className="PcabecalhoEntradasVisualizar">RA</th>
                                <th className="PcabecalhoEntradasVisualizar">F.B.</th>
                                <th className="PcabecalhoEntradasVisualizar">SCAN</th>
                                <th className="PcabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        {!noResponse && Array.isArray(response) && response.map(function (entry) {
                            console.log(entry)
                            return (
                                <tbody key={entry.idAluno}>
                                    <tr>
                                        <td>{entry.nome ? entry.nome : '-'}</td>
                                        <td>{entry.ra ? entry.ra : '-'}</td>
                                        <td>{entry.email ? entry.email : '-'}</td>
                                        <td>{entry.curso ? entry.curso : '-'}</td>
                                        <td>{entry.idTurma ? entry.idTurma : '-'}</td>

                                        <td>{entry.ra ? entry.ra : '-'}</td>
                                        <td>{entry.feedback ? entry.feedback : '-'}</td>
                                        <td>{entry.validadoPorEmail ? entry.validadoPorEmail : '-'}</td>

                                        <td style={{ width: '30px' }}>
                                            <ul style={{ width: '110px' }} className="PbotoesTabEntradasVisualizar">
                                                <Link className="Pbtn1EntradasVisualizar" to={`/visualizarForms?al=${entry.idAluno}&id=${idUrl}`}><img style={{ width: '42px' }} src={botaopesquisa} alt="visualizar" /></Link>
                                                <li className="Pbtn3EntradasVisualizar" id="hover"><button type='button' onClick={() => deleteAluno(entry.idAluno)}><img src={botaodelete} alt="deletar" /></button></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            );
                        })}



                    </table>
                </div>

            </div>
        </div>
        <div className='phonediv'>
                <div className='headerdiv' >
                    <div className='buttonhome3'  >
                        <button type='button' onClick={() => logout()} style={{ backgroundColor: '#737373' }}>LOGOUT</button>
                    </div>
                    
                    {/* <div className='buttonhome3' >
                        <button type='button'  style={{ backgroundColor: '#65BABB', paddingRight: '5%', paddingLeft: '5%' }}>FIN. EVENTO</button>
                    </div> */}

                </div>
               <h1 style={{fontFamily:'Poppins',color:'#097828'}}>Lista de Presença</h1>
                <div className="Ptabela">
                    <table className="PrTableEntradasVisualizar">
                        <thead>
                            <tr>
                            <th className="PcabecalhoEntradasVisualizar">NOME</th>
                                <th className="PcabecalhoEntradasVisualizar">RA</th>
                                <th className="PcabecalhoEntradasVisualizar">EMAIL</th>
                                <th className="PcabecalhoEntradasVisualizar">CURSO</th>
                                <th className="PcabecalhoEntradasVisualizar">TURMA</th>
                                <th className="PcabecalhoEntradasVisualizar">RA</th>
                                <th className="PcabecalhoEntradasVisualizar">FEEDBACK</th>
                                <th className="PcabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        {!noResponse && Array.isArray(response) && response.map(function (entry) {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                        <td>{entry.nome ? entry.nome : '-'}</td>
                                        <td>{entry.ra ? entry.ra : '-'}</td>
                                        <td>{entry.email ? entry.email : '-'}</td>
                                        <td>{entry.curso ? entry.curso : '-'}</td>
                                        <td>{entry.idTurma ? entry.idTurma : '-'}</td>

                                        <td>{entry.ra ? entry.ra : '-'}</td>
                                        <td>{entry.feedback ? entry.feedback : '-'}</td>
                                        <td>{entry.feedback ? entry.feedback : '-'}</td>

                                        <td style={{ width: '30px' }}>
                                            <ul style={{ width: '110px' }} className="PbotoesTabEntradasVisualizar">
                                                <Link className="Pbtn1EntradasVisualizar" to={`/visualizarForms?al=${entry.idAluno}&id=${idUrl}`}><img style={{ width: '42px' }} src={botaopesquisa} alt="visualizar" /></Link>
                                                <li className="Pbtn3EntradasVisualizar" id="hover"><button type='button' onClick={() => deleteAluno(entry.idAluno)}><img src={botaodelete} alt="deletar" /></button></li>
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

export default Alunos;
