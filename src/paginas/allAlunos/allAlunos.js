import { useNavigate } from 'react-router-dom';
import '../../paginas/allAlunos/allAluno.css';
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
    const [turma, setTurma] = useState(String);
    const [estagio, setEstagio] = useState(String)
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
        if (response) setResponse(response.data.sort());
        console.log(response.data)
    }

    function compare(a, b) {
        if (a.nomeAluno < b.nomeAluno)
            return -1;
        if (a.nomeAluno > b.nomeAluno)
            return 1;
        return 0;
    }

    const getAll = async () => {
        const response = await axios.get('/minHorasAll')
            .catch(err => console.error('Error: ', err));



        if (response) setResponse(response.data);

        console.log(response.data)
    }


    function findTurma(id) {
        let array = responseTurmaFind
        const turmas = array.find(element => element.idTurma === id)
        if (turmas) return turmas.turma
    }
    function logout() {
        if( window.confirm("Tem certeza que deseja sair ?")){
            localStorage.clear(); 
            navigate("/") 
    
        }
       
       
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
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
        console.log(estagio)
        if (ordenar === "Engenharia de Controle e Automação") curso(response)
        getTurmas();
        if (estagio === '1') get();
        if (estagio === '2') getAll();
    }, [estagio])


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

            <div className="screen7" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>


                <div className='acesso' >


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
                <span className='tituloFil' style={{ width: '79%', marginTop: '30px' }}>Ordernar por:</span>
                <div className='testeTudo ' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '80%', marginTop: '30px' }}>
                    <div >
                        <label className="tituloFiltro" >Curso:</label>
                        <select
                            className='inputBusca'
                            onChange={(event) => setCursos(event.target.value)}
                        >
                            <option value="" data-defaultValue selected></option>
                            <option value="Engenharia de Controle e Automação">Engenharia de Controle e Automação</option>
                            <option value="Engenharia Ambiental">Engenharia Ambiental</option>
                        </select>
                    </div>
                    <div >
                        <label className="tituloFiltro" >Turma:</label>
                        <select
                            style={{ width: '100px' }}
                            className='inputBusca'

                            onChange={(event) => setTurma(event.target.value)}
                        >
                            <option value="" data-defaultValue selected></option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    <div >
                        <label className="tituloFiltro" >Estagio:</label>
                        <select
                            style={{ width: '100px' }}
                            className='inputBusca'
                            onChange={(event) => setEstagio(event.target.value)}
                        >
                            <option value="" data-defaultValue selected></option>
                            <option value="1">Sim</option>
                            <option value="2">Não</option>


                        </select>
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
                            </tr>
                        </thead>
                        {!noResponse && response.map(function (response) {
                            return (
                                <>
                                    {!busca || busca.toUpperCase() == response.curso.substr(0, busca.length).toUpperCase() ?

                                        <>
                                            {!cursos || cursos.toUpperCase() == response.curso.substr(0, cursos.length).toUpperCase() ?
                                                <>


                                                    {!turma || turma.toUpperCase() == findTurma(response.idTurma).substr(0, turma.length).toUpperCase() ?
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
