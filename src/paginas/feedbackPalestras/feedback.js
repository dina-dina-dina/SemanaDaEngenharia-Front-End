import { useNavigate, useLocation } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import axios from '../../axios';
import Palestras from '../palestras/palestras';



function FeedbackPalestra() {
    const [nome, setNome] = useState(String)
    const [Feedback, setFeedback] = useState(String)
    const [cargaHoraria, setCargaHoraria] = useState(Date)
    const navigate = useNavigate();
    const [Dia, setDia] = useState(Date)
    const [palestras, setPalestras] = useState([])
    const location = useLocation();

    const getEvento = async () => {
        const evento = localStorage.getItem('evento')
        const eventoresp = await axios.get(`/palestras/${evento}`)
            .catch(err => console.error('Error: ', err));
        if (eventoresp) setPalestras(eventoresp.data);
    }


    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var positionCommercialE = stringUrl.indexOf("&");
    var idUrl = stringUrl.substring(positionCommercialE + 4);
    idUrl = decodeURIComponent(idUrl);




    const idUsuario = localStorage.getItem('user')



    function handleClick() {
        if (idUrl == 20) {
            setFeedback("Abertura")
        }
        navigate('/qrCode2', { state: { nome: location.state.nome, idUsuario: idUsuario, feedback: Feedback, idPalestraEvento: idUrl } });
    }

    useEffect(() => {
        getEvento();
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');


    }, [])


    return (
        <div className='containerNew'>
            <div className='formulario2'>
                <span id='title'>FEEDBACK DA PALESTRA:</span>
                <div className='textpal'>{location.state.nome}</div>
                {(idUrl == 20 || idUrl == 67)
                    ?<div className='texto'></div>
                : <div className='texto'>Escreva o feedback e gere seu QRCode para verificação</div>

                }
                <div className='itensForms'>
                    <form>
                        {
                            (idUrl == 20)
                                ? <div style={{ fontFamily: 'Poppins', textAlign: 'center', fontWeight: 'bold' }}>Esse QR Code deve ser lido na entrada da Abertura</div>

                                : <div className='data'>
                                    <label id='labelStyle'>Feedback</label>
                                    <input id='inputStyle' placeholder='feedback' type={'text'} onChange={(event) => setFeedback(event.target.value)}></input>
                                </div>}


                        <div className='botao' >
                            <button type='button' onClick={() => { handleClick() }}>Gerar QRCode</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default FeedbackPalestra;
