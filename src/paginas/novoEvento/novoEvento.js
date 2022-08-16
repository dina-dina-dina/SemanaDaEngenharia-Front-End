import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';



function NovoEvento() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)
    const navigate = useNavigate();
    
    console.log(nome)
    console.log(dataInicio)
    console.log(dataFinal)

    function handleClick() {
        navigate("/palestras");
      }

    return (
        <div className='containerNew'>
             
            <div className='formulario2'>
                    <span id = 'tittle'>EVENTO</span>
                <div className='itensForms'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle'>Nome</label>
                            <input id='inputStyle' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Data de Inicio</label>
                            <input id='inputStyle' type={'date'} onChange={(event) => setDataInicio(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Data Final</label>
                            <input id='inputStyle' type={'date'} onChange={(event) => setDataFinal(event.target.value)}></input>
                        </div>
                        <div className='botao' onClick={handleClick}>
                            <button>Criar Evento</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default NovoEvento;