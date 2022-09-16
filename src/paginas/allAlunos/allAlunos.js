import { useNavigate } from 'react-router-dom';
import '../../paginas/palestras/palestras.css';
import React, { useState, useContext, useEffect } from 'react';
import botaopesquisa from '../../assets/lupa.png'
import botaoqrcode from '../../assets/qrcode.png'
import botaodelete from '../../assets/delete.png'
import axios from '../../axios';
import { Link } from 'react-router-dom';


function AlunosAll() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const [response, setResponse] = useState(Array);
    const [responseTurmaFind, setResponseTurmaFind] = useState(Array);
    const [busca, setBusca] = useState(String);
    const [ordenar, setOrdenar] = useState(String);
    const [cursos, setCursos] = useState(String);
    const [teste, setTeste] = useState(0);





    const navigate = useNavigate();

    const noResponse = !response || (response && response.length === 0);


    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var positionCommercialE = stringUrl.indexOf("&");
    var idUrl = stringUrl.substring(positionCommercialE + 4);
    idUrl = decodeURIComponent(idUrl);
    console.log(idUrl)

    const get = async () => {
        const response = await axios.get('/minHoras')
            .catch(err => console.error('Error: ', err));
        if (response) setResponse(response.data);
        console.log(response.data)
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
    function curso(curso) {
        curso.sort(function (a) {
            var nameA = a.curso // ignore upper and lowercase
            if (nameA == "Engenharia de Controle e Automação") {
                return 0;
            }

            // names must be equal
            setResponse(curso)

        });


    }

    useEffect(() => {
        if (ordenar === "Engenharia de Controle e Automação") curso(response)
        getTurmas();
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

                        <button id='evento' onClick={Formulario}>Formulario</button>
                    </div>
                    <div className='cadastrar'>
                        <button onClick={professor} id='evento' >Encerrar Evento</button>
                    </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px', width: '22.5%', minWidth: '150px' }}>
                    <label className="tituloFiltro" >Ordenar por:</label>
                    <select
                        className='inputBusca'
                        style={{ width: '100%', minWidth: '150px' }}
                        onChange={(event) => setCursos(event.target.value)}
                    >
                        <option value="Engenharia de Controle e Automação" data-defaultValue selected>Enegenharia de Controle e Automação</option>
                        <option value="Engenharia Ambiental">Engenharia Ambiental</option>
                        <option value="3">Pessoa Física</option>
                        <option value="4">Pessoa Jurídica</option>
                    </select>
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
                            </tr>
                        </thead>
                        {!noResponse && response.map(function (response) {
                            return (
                                <>
                                    {!busca || busca.toUpperCase() == response.curso.substr(0, busca.length).toUpperCase() ?

                                        <>
                                            {!cursos || cursos.toUpperCase() == response.curso.substr(0, cursos.length).toUpperCase() ?
                                                <>


                                                    {!email || email.toUpperCase() == response.email.substr(0, email.length).toUpperCase() ?
                                                        <>
                                                            <tbody>
                                                                <tr>
                                                                    <td>{response.nomeAluno ? response.nomeAluno : '-'}</td>
                                                                    <td>{response.ra ? response.ra : '-'}</td>
                                                                    <td>{response.email ? response.email : '-'}</td>
                                                                    <td>{response.curso ? response.curso : '-'}</td>
                                                                    <td>{findTurma(response.idTurma) ? findTurma(response.idTurma) : '-'}</td>
                                                                    <td>{response.cgTotal ? response.cgTotal : '-'}</td>



                                                                </tr>
                                                            </tbody>

                                                        </> : null}



                                                </> : null
                                            }
                                        </> : null
                                    }



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

export default AlunosAll;
