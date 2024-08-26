import { useNavigate, useLocation } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import QRCode from 'react-qr-code';
import axios from '../../axios'
import GoBackArrow from '../../components/backArrow';

function Qrcode2() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)
    const location = useLocation();

    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);



    // const [idUrl, setIdUrl] = useState(String)

    const navigate = useNavigate();


    async function getName() {
        const queryParams = {
            param1: localStorage.getItem('user'),
        }
        const response = await axios.get('/aluno/nome', { params: queryParams })
            .catch(err => console.error('Error: ', err));
        if (response) setNome(response.data.nome);
        console.log(response)

    }



    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
        getName()
    }, [])


    function handleClick() {
        navigate("/AlunosHomePage");
    }

    var stringUrl = window.location.href;
    var positionInterrogation = stringUrl.indexOf("?");
    var positionCommercialE = stringUrl.indexOf("&");
    var idUrl = stringUrl.substring(positionCommercialE + 4);
    idUrl = decodeURIComponent(idUrl);
    console.log(idUrl)

    const object = JSON.stringify({
        'idPalestraEvento': location.state.idPalestraEvento,
        'idAluno': location.state.idUsuario,
        'feedback': location.state.feedback
    })



    return (
        <>

            <div className='containerNew'>
                <div className='formularioQr'>

                    <span id='titleQrcode'>APRESENTE PARA UM MONITOR!</span>
                    <span id='titleQrcode'>{location.state.nome}</span>
                    <span id='titleQrcode'>QR CODE GERADO POR:</span>
                    <span id='titleQrcode'>{nome}</span>
                    <div className='qrcode'>
                        <QRCode
                            title=""
                            value={object}
                            bgColor={back}
                            fgColor={fore}
                            size={size === '' ? 0 : size}
                        />
                    </div>

                    <div className='botao' >
                        <button type='button' onClick={() => { handleClick() }}>Feito!</button>
                    </div>
                    <div className='itensForms'>
                        <form>


                        </form>
                    </div>

                </div>

            </div>

        </>


    );
}

export default Qrcode2;
