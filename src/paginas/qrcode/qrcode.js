import { useNavigate,useLocation } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import QRCode from 'react-qr-code';



function Qrcode() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)
    const location = useLocation();

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
        
        
    return (
        <div className='containerNew'>
            <div>{location.state.idPalestraEvento}</div>

            <div className='formulario2'>
                <span id='title'>QR-CODE</span>
                <div className='itensForms'>
                    <form>
                        
                        
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Qrcode;
