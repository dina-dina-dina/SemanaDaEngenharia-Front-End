import { useNavigate } from 'react-router-dom';
import '../../paginas/formulario/formulario.css'
import React, { useState, useContext, useEffect } from 'react';
import SemanaEng from '../../assets/SemanaEng.jpg'
import axios from '../../axios';
import InputMask from 'react-input-mask';






function VisualizarForms() {
    const [nome, setNome] = useState(String)
    const [email, setEmail] = useState(String)
    const [ra, setRa] = useState(String)
    const navigate = useNavigate();
    const [turma, setTurma] = useState(String)
    const [feedback, setFeedback] = useState(String)
    const [idTurma, setIdTurma] = useState(Number)
    const [responseTurma, setResponseTurma] = useState(Array);
    const [buscaTipo, setBuscaTipo] = useState(Array);
    const [estagio, setEstagio] = useState(Number);
    const [curso, setCurso] = useState(String);
    const [telefone, setTelefone] = useState(String)
    const [interesse, setInteresse] = useState(String)
    const [responseTurmaFind, setResponseTurmaFind] = useState(Array);
    console.log(interesse)

    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var positionCommercialE = stringUrl.indexOf("&");
    var idUrl = stringUrl.substring(positionCommercialE + 4);
    idUrl = decodeURIComponent(idUrl);
    console.log(idUrl)
    var positionCommercialE = stringUrl.indexOf("&");

    


    const getTurmas = async () => {
        const response = await axios.get('/turma')
            .catch(err => console.error('Error: ', err));
        if (response) setResponseTurmaFind(response.data);
        console.log(response)
    }


    function findTurma(id) {
        let array = responseTurmaFind
        const turmas = array.find(element => element.idTurma === id)
        if (turmas) return turmas.turma
        console.log(turmas.turma)
    }


    const get = async () => {

        var editable = stringUrl.substring(positionInterrogation + 4, positionCommercialE);
        console.log(editable)
        const response = await axios.get(`/formulario/${idUrl}`)
            .catch(err => console.error('Error: ', err));
        if (response) {

            const comparacao = await response?.data[0].aluno.find(element => element.idAluno == editable)


            setResponseTurma(response.data)
            setNome(comparacao.nomeAluno)
            setEmail(comparacao.email)
            setTelefone(comparacao.telefone)
            setRa(comparacao.ra)
            setBuscaTipo(comparacao.idTurma)

            setEstagio(comparacao.estagio)
            setInteresse(comparacao.interesse)
            setFeedback(comparacao.palestrasAlunos.feedback)


            setCurso(comparacao.curso)
        }


        console.log(response)
    }

    useEffect(() => {

        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
        get();
        getTurmas();
    }, [])








    // async function Envio() {
    //     var stringUrl = window.location.href;
    //     var positionInterrogation = stringUrl.indexOf("?");
    //     var idUrl = stringUrl.substring(positionInterrogation + 1);
    //     idUrl = decodeURIComponent(idUrl);
    //     console.log(idUrl)
    //     console.log(buscaTipo)

    //     try {

    //         if (nome && email && ra && buscaTipo && feedback &&estagio!=0 && interesse && telefone && curso) {
    //             const response = await axios.post(`/formulario/${idUrl}`, {
    //                 "nomeAluno": nome,
    //                 "feedback": feedback,
    //                 "email": email,
    //                 "ra": ra,
    //                 "telefone": telefone,
    //                 "estagio": estagio,
    //                 "curso": curso,
    //                 "interesse": interesse,
    //                 "idTurma": buscaTipo,

    //             }).catch(err => alert(err));
    //             if (response) {
    //                 alert("Presença cadastrada com sucesso!")
    //                 navigate("/obrigado");
    //             }

    //         } else alert('Preencha todos os campos')

    //     } catch (err) {
    //         alert(err)
    //     }






    // }





    function Voltar() {
        navigate(`/alunos?&id=${idUrl}`);
    }

    return (
        <div className='containerNew2'>


            <div className='formulario22'>

                <img src={SemanaEng} id='title2'></img>
                <div className='itensForms2'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle2'>Nome</label>
                            <input disabled={true} id='inputStyle2' value={nome} onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Email</label>
                            <input disabled={true} id='inputStyle2' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Telefone</label>
                            <InputMask disabled={true} value={telefone} mask='(99) 99999-9999' id='inputStyle2' onChange={(event) => setTelefone(event.target.value)}>{(inputProps) => (
                                <input
                                    {...inputProps}
                                    type="tel"

                                />
                            )}</InputMask>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>RA</label>
                            <input disabled={true} id='inputStyle2' value={ra} type={'number'} onChange={(event) => setRa(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Curso</label>
                            {/* <input id='inputStyle2' onChange={(event) => setIdTurma(event.target.value)}></input> */}

                            <select id='inputStyle2'
                                className='inputBusca'
                                disabled={true}
                                onChange={(event) => setCurso(event.target.value)}
                                defaultValue=''
                                value={curso}
                            >
                                <option value=''></option>
                                <option value={'Engenharia Ambiental'}>Engenharia Ambiental</option>
                                <option value={'Engenharia de Controle e Automação'}>Engenharia de Controle e Automação</option>


                            </select>
                        </div>


                        <div className='nome2'>
                            <label id='labelStyle2'>Turma</label>
                            {/* <input id='inputStyle2' onChange={(event) => setIdTurma(event.target.value)}></input> */}

                            <select id='inputStyle2'
                                className='inputBusca'
                                style={{ width: '150px' }}
                                onChange={(event) => setBuscaTipo(event.target.value)}
                                defaultValue={''}
                                value={buscaTipo}
                                disabled={true}
                            >
                                <option value={6}>16</option>
                                <option value={7}>17</option>
                                <option value={8}>18</option>
                                <option value={9}>19</option>
                                <option value={10}>20</option>


                            </select>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle22'>Você está estagiando ?</label>
                            {/* <input id='inputStyle2' onChange={(event) => setIdTurma(event.target.value)}></input> */}

                            <select id='inputStyle2'
                                className='inputBusca'
                                style={{ width: '150px' }}
                                onChange={(event) => setEstagio(event.target.value)}
                                defaultValue=''
                                value={estagio}
                                disabled={true}
                            >
                                <option value=''></option>
                                <option value={1}>Sim</option>
                                <option value={2}>Não</option>


                            </select>

                        </div>
                        <div className='data2'>
                            <label id='labelStyle23'>Como ficou sabendo do Evento ?</label>
                            {/* <input id='inputStyle2' onChange={(event) => setIdTurma(event.target.value)}></input> */}

                            <select id='inputStyle2'
                                className='inputBusca'
                                disabled={true}

                                onChange={(event) => setInteresse(event.target.value)}
                                defaultValue=''
                                value={interesse}
                            >
                                <option value=''></option>
                                <option value={'Facebook'}>Facebook</option>
                                <option value={'Instagram'}>Instagram</option>
                                <option value={'Amigos, parentes ou outras pessoas próximas'}>Amigos, parentes ou outras pessoas próximas</option>
                                <option value={'Anúncios da Semana'}>Anúncios da Semana</option>
                                <option value={'Outros'}>Outros</option>


                            </select>
                        </div>

                        <div className='feedback'>
                            <label id='labelStyle2'>Feedback</label>
                            <textarea disabled={true} value={feedback} type='text' id='inputStyleFb' onChange={(event) => setFeedback(event.target.value)}></textarea>
                        </div>
                        <div className='botao2'>
                            <button type="button" className="salvar" onClick={() => Voltar()} >Voltar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default VisualizarForms;
