import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';



function Qrcode() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)

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

            <div className='formulario2'>
                <span id='tittle'>QR-CODE</span>
                <div className='itensForms'>
                    <form>
                        <img src={ `https://chart.googleapis.com/chart?cht=qr&chl=https://semanadaengenharia-frontend.herokuapp.com/formulario?${idUrl}&chs=500x500` }
                            alt="qrCode"
                            width='500'
                            height='500'
                            // style={{ border: '1px solid #a0a0a0', marginLeft: '15px', marginRight: '15px' }}
                            
                        />
                        
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Qrcode;
