import { useNavigate,useLocation } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import QRCode from 'react-qr-code';



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


    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
    }, [])


    function handleClick() {
        navigate("/palestras");
    }
   
        var stringUrl = window.location.href;
        var positionInterrogation = stringUrl.indexOf("?");
        var positionCommercialE = stringUrl.indexOf("&");
        var idUrl = stringUrl.substring(positionCommercialE + 4);
        idUrl = decodeURIComponent(idUrl);
        console.log(idUrl)
        
        const object = JSON.stringify({
            'idPalestraEvento':location.state.idPalestraEvento,
            'idAluno':location.state.idUsuario,
            'feedback':location.state.feedback
        })



    return (
        <div className='containerNew'>

            <div className='formulario2'>

                <span id='title'>APRESENTE PARA UM MONITOR!</span>
                <span id='title'>{location.state.nome}</span>

                <QRCode
                        title=""
                        value={object}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
                <div className='itensForms'>
                    <form>
                        
                        
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Qrcode2;
