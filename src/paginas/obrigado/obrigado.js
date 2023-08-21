import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import '../../paginas/obrigado/obrigado.css'
import SemanaEng from '../../assets/SemanaEng.jpg'
import { QrReader } from 'react-qr-reader';



function Obrigado() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)
    const [data, setData] = useState('No result');

    // const [idUrl, setIdUrl] = useState(String)








    return (
        <div className='vaitudo'>
            <img src={SemanaEng} id='title45'></img>
            <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%' }}
                />
                <p>{data}</p>
            <div className='containerNew3'>

              


                <span id='title5'>Obrigado! =)</span>



            </div>
        </div>



    );
}

export default Obrigado;
