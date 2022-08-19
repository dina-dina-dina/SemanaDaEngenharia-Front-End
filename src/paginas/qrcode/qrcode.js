import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';



function Qrcode() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)

    // const [idUrl, setIdUrl] = useState(String)

    const navigate = useNavigate();


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

            <div className='formulario2'>
                <span id='tittle'>EVENTO</span>
                <div className='itensForms'>
                    <form>
                        <img src={ `https://chart.googleapis.com/chart?cht=qr&chl=https://semanadaengenharia-frontend.herokuapp.com/formulario?${idUrl}&chs=100x100` }
                            alt="qrCode"
                            width='100'
                            height='100'
                            style={{ border: '1px solid #a0a0a0', marginLeft: '15px', marginRight: '15px' }}
                            
                        />
                        <button >url</button>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Qrcode;
