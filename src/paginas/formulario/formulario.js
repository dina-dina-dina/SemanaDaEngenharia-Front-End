import { useNavigate } from 'react-router-dom';
import '../../paginas/formulario/formulario.css'
import React, { useState, useContext, useEffect } from 'react';
import SemanaEng from '../../assets/SemanaEng.jpg'



function Formulario() {
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
        <div className='containerNew2'>

            <div className='formulario22'>
                <img  src={SemanaEng} id='tittle2'></img>
                <div className='itensForms2'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle2'>Nome</label>
                            <input id='inputStyle2' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Email</label>
                            <input id='inputStyle2' type={'date'} onChange={(event) => setDataInicio(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>RA</label>
                            <input id='inputStyle2' type={'date'} onChange={(event) => setDataFinal(event.target.value)}></input>
                        </div>
                        <div className='nome2'>
                            <label id='labelStyle2'>Turma</label>
                            <select id='inputStyle2' onChange={(event) => setNome(event.target.value)}></select>
                        </div>
                        <div className='feedback'>
                            <label id='labelStyle2'>Feedback</label>
                            <textarea id='inputStyleFb' onChange={(event) => setNome(event.target.value)}></textarea>
                        </div>
                        <div className='botao2' onClick={handleClick}>
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Formulario;
