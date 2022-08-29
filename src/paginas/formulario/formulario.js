import { useNavigate } from 'react-router-dom';
import '../../paginas/formulario/formulario.css'
import React, { useState, useContext, useEffect } from 'react';
import SemanaEng from '../../assets/SemanaEng.jpg'
import axios from '../../axios';
import InputMask from 'react-input-mask';





function Formulario() {
    const [nome, setNome] = useState(String)
    const [email, setEmail] = useState(Number)
    const [ra, setRa] = useState(Number)
    const navigate = useNavigate();
    const [turma, setTurma] = useState(String)
    const [feedback, setFeedback] = useState(String)
    const [idTurma, setIdTurma] = useState(Number)
    const [responseTurma, setResponseTurma] = useState(Array);
    const [buscaTipo, setBuscaTipo] = useState(Number);
    const [estagio, setEstagio] = useState(Number);
    const [telefone, setTelefone] = useState(String)
    console.log(telefone)
    console.log(estagio)



    const getTurmas = async () => {
        const response = await axios.get('/turma')
            .catch(err => console.error('Error: ', err));
        if (response) setResponseTurma(response.data);
        console.log(response)
    }

    useEffect(() => {

        getTurmas();
    }, [])








    async function Envio() {
        var stringUrl = window.location.href;
        var positionInterrogation = stringUrl.indexOf("?");
        var idUrl = stringUrl.substring(positionInterrogation + 1);
        idUrl = decodeURIComponent(idUrl);
        console.log(idUrl)
        console.log(buscaTipo)

        try {
            navigate("/obrigado");
            // if (nome && email && ra && buscaTipo && feedback) {
            //     const response = await axios.post(`/formulario/${idUrl}`, {
            //         "nomeAluno": nome,
            //         "feedback": feedback,
            //         "email": email,
            //         "ra": ra,
            //         "telefone": telefone,
            //         "estagio": estagio,
            //         "idTurma": buscaTipo,

            //     }).catch(err => alert(err));
            //     if (response) {
            //         alert("Presença cadastrada com sucesso!")
                   
            //     }

            // } else alert('Preencha todos os campos')

        } catch (err) {
            alert(err)
        }






    }





    function handleClick() {
        navigate("/palestras");
    }

    return (
        <div className='containerNew2'>


            <div className='formulario22'>

                <img src={SemanaEng} id='tittle2'></img>
                <div className='itensForms2'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle2'>Nome</label>
                            <input id='inputStyle2' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Email</label>
                            <input id='inputStyle2' onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Telefone</label>
                            <InputMask value={telefone} mask='(99) 99999-9999' id='inputStyle2' onChange={(event) => setTelefone(event.target.value)}></InputMask>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>RA</label>
                            <input id='inputStyle2' type={'number'} onChange={(event) => setRa(event.target.value)}></input>
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
                            >
                                <option value=''></option>
                                {responseTurma && responseTurma.map(function (response) {
                                    return (
                                        <option value={response.idTurma}>{response.turma}</option>
                                    );
                                })}

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
                            >
                                <option value=''></option>
                                <option value={1}>Sim</option>
                                <option value={2}>Não</option>


                            </select>

                        </div>

                        <div className='feedback'>
                            <label id='labelStyle2'>Feedback</label>
                            <textarea type='text' id='inputStyleFb' onChange={(event) => setFeedback(event.target.value)}></textarea>
                        </div>
                        <div className='botao2'>
                            <button type="button" className="salvar" onClick={() => Envio()} >Enviar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Formulario;
