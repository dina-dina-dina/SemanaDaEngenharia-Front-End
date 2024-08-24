import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import axios from '../../axios';



function NovoEvento() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)
    const navigate = useNavigate();

    console.log(nome)
    console.log(dataInicio)
    console.log(dataFinal)

    async function Envio() {
        // var stringUrl = window.location.href;
        // var positionInterrogation = stringUrl.indexOf("?");
        // var idUrl = stringUrl.substring(positionInterrogation + 1);
        // idUrl = decodeURIComponent(idUrl);
        // console.log(idUrl)


        try {
            if (nome && dataInicio && dataFinal) {
                const response = await axios.post('/evento', {
                    "nomeEvento": nome,
                    "dataInicio": dataInicio,
                    "dataFinal": dataFinal,
                }).catch(err => alert(err));
                if (response) {
                    console.log(response)
                    alert("Evento registrado com sucesso!")
                    navigate(`/palestras?&id=${response.data.idEvento}`);
                }

            } else alert('Preencha todos os campos')

        } catch (err) {
            alert(err)
        }






    }
    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');


    }, [])




    return (
        <div className='containerNew'>

            <div className='formularioEvento'>
                <span id='title'>EVENTO</span>
                <div className='itensForms'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle'>Nome</label>
                            <input id='inputStyleEvento' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Data de Inicio</label>
                            <input id='inputStyleEvento' type={'date'} onChange={(event) => setDataInicio(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Data Final</label>
                            <input id='inputStyleEvento' type={'date'} onChange={(event) => setDataFinal(event.target.value)}></input>
                        </div>
                        <div className='botao'>
                            <button type={'button'} onClick={() => Envio()}>Criar Evento</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default NovoEvento;
