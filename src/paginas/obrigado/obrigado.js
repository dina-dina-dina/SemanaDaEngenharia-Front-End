import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import '../../paginas/obrigado/obrigado.css'



function Obrigado() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)

    // const [idUrl, setIdUrl] = useState(String)

    


    
   
      
        
    return (
        <div className='containerNew3'>

            
                
                
                <span id='tittle5'>Obrigado! =)</span>
                    
    

        </div>


    );
}

export default Obrigado;
