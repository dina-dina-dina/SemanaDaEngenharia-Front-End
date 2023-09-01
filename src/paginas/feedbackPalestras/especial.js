import { useNavigate } from 'react-router-dom';
import '../../paginas/cadastro/cadastro.css'
import React, { useState, useContext, useEffect } from 'react';
import axios from '../../axios';
import { IMaskInput } from "react-imask";



function Especial() {
    const navigate = useNavigate();
    const [ra, setRA] = useState(Number)
    const [resposta, setResponse] = useState({})
    function handleClick() {
        navigate("/palestras");
    }

    async function getAluno() {
        try {
            const response = await axios.get(`contabilizar/especial/${ra}`)
            setResponse(response.data)
            console.log(response.data)
        } catch (err) {
            if (err?.response?.data.error) alert(err.response.data.error)
            else alert(err.message)
        }
    }
    async function confirmar() {

        try {
            const response = await axios.post(`contabilizar/especial`, resposta)
            alert("Presença cadastrada com sucesso!")
        } catch (err) {
            if (err?.response?.data.error) alert(err.response.data.error)
            else alert(err.message)
        }
    }
    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');


    }, [])


    return (
        <div className='containerNew'>
            <div style={{ flexDirection: 'column' }}>
                <div className='formulario2'>
                    <span id='title'>CADASTRO ESPECIAL VENHA NOS CONHECER</span>
                    <div className='itensForms'>
                        <form>
                            <div className='turma'>
                                <label>RA DO ALUNO</label>
                                <IMaskInput type='number' placeholder='000000000' mask="000000000" onChange={(event) => setRA(event.target.value)} />
                            </div>
                            <div className='botao' >
                                <button type='button' onClick={() => getAluno()}>PROCURAR ALUNO</button>
                            </div>
                        </form>
                    </div>
                    {resposta ? <>
                        <span id='title'>{resposta.nome}</span>
                        <div className='itensForms'>
                            <form>
                                <div className='botao' >
                                    <button type='button' onClick={() => confirmar()}>Confirmar</button>
                                </div>
                            </form>
                        </div>
                    </>

                        : null}
                </div>

            </div>




        </div>


    );
}

export default Especial;
