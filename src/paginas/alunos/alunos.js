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

    const noResponse = !response || (response && response.length === 0);


    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var positionCommercialE = stringUrl.indexOf("&");
    var idUrl = stringUrl.substring(positionCommercialE + 4);
    idUrl = decodeURIComponent(idUrl);
    console.log(idUrl)

    const get = async () => {
        const queryParams = {
            param1:idUrl
        }        
        const response = await axios.get('/aluno/listapalestra', { params: queryParams })
            .catch(err => console.error('Error: ', err));
        if (response) setResponse(response);
        console.log(response)
    }
    function findTurma(id) {
        let array = responseTurmaFind
        const turmas = array.find(element => element.idTurma === id)
        if (turmas) return turmas.turma
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
        if( window.confirm("Tem certeza que deseja sair ?")){
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

                        <button id='evento' onClick={Formulario}>Formulario</button>
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
                                <th className="cabecalhoEntradasVisualizar">RA</th>
                                <th className="cabecalhoEntradasVisualizar">EMAIL</th>
                                <th className="cabecalhoEntradasVisualizar">CURSO</th>
                                <th className="cabecalhoEntradasVisualizar">TURMA</th>
                                <th className="cabecalhoEntradasVisualizar">CARGA TOTAL</th>
                                <th className="cabecalhoEntradasVisualizar">FEEDBACK</th>
                                <th className="cabecalhoEntradasVisualizar">AÇÕES</th>
                            </tr>
                        </thead>
                        {!noResponse && response.map(function (response) {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{response.nomeAluno ? response.nomeAluno : '-'}</td>
                                            <td>{response.ra ? response.ra : '-'}</td>
                                            <td>{response.email ? response.email : '-'}</td>
                                            <td>{response.curso ? response.curso : '-'}</td>
                                            <td>{findTurma(response.idTurma) ? findTurma(response.idTurma) : '-'}</td>
                                            <td>{response.cgTotal ? response.cgTotal : '-'}</td>
                                            <td style={{ width: '350px' }}>{response.palestrasAlunos.feedback ? response.palestrasAlunos.feedback : '-'}</td>


                                            <td style={{ width: '30px' }}>

                                                <ul style={{ width: '110px' }} className="botoesTabEntradasVisualizar">
                                                    <Link className="btn1EntradasVisualizar" to={`/visualizarForms?al=${response.idAluno}&id=${idUrl}`}><img style={{ width: '42px' }} src={botaopesquisa} alt="visualizar" /></Link>
                                                    <li className="btn3EntradasVisualizar" id="hover"><button type='button' onClick={() => deleteAluno(response.idAluno)}><img src={botaodelete} alt="deletar" /></button></li>

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
