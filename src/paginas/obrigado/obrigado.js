import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import '../../paginas/obrigado/obrigado.css'
import SemanaEng from '../../assets/SemanaEng.jpg'



function Obrigado() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)

    // const [idUrl, setIdUrl] = useState(String)








    return (
<div className = 'vaitudo'>
<img src={SemanaEng} id='title45'></img>
<div className='containerNew3'>
            



            <span id='title5'>Obrigado! =)</span>



        </div>
</div>
       


    );
}

export default Obrigado;
