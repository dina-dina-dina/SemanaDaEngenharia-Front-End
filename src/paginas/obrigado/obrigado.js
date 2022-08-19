import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';



function Obrigado() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)

    // const [idUrl, setIdUrl] = useState(String)

    


    
   
        var stringUrl = window.location.href;
        var positionInterrogation = stringUrl.indexOf("?");
        var positionCommercialE = stringUrl.indexOf("&");
        var idUrl = stringUrl.substring(positionCommercialE + 4);
        idUrl = decodeURIComponent(idUrl);
        console.log(idUrl)
        
        
    return (
        <div className='containerNew'>

            <div className='formulario2'>
                
                <div className='itensForms'>
                <span id='tittle'>Obrigado</span>
                    
                </div>

            </div>

        </div>


    );
}

export default Obrigado;
