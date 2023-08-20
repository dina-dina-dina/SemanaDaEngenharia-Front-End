import './minhaspalestras.css';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios'
import image from '../../assets/logosemanaCentrr.png'
import GoBackArrow from '../../components/backArrow';

function MinhasPalestras() {


    const navigate = useNavigate();

    function handleClick1() {
        navigate("/");
    }
    function handleClick2() {
        navigate("/");
    }

    const [MinhasPalestras, setMinhasPalestras] = useState({})


    const getMinhasPalestras = async () => {
        const queryParams = {
            param1: localStorage.getItem('user'),
            param2: localStorage.getItem('evento')
        }
        const response = await axios.get('/contabilizar/minhas', { params: queryParams })
            .catch(err => console.error('Error: ', err));
        if (response) await setMinhasPalestras(response.data);
        console.log(response)

    }

    useEffect(() => {
        getMinhasPalestras();
    }, [])

    return (
        <div>
            <GoBackArrow />
            <div className='fotomin'>
                <img src={image} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
            </div>
            {MinhasPalestras.length > 0 ? (
                <div className='todas'>
                    {MinhasPalestras.map((item) => (
                        <div key={item.id} className='entrada'>
                            <div className='topico'>Palestra: {item.nomePalestra}</div>
                            <div className='topico'>Palestrante: {item.palestrante}</div>
                            <div className='topico'>Carga Horária: {item.CargaHoraria}</div>
                        </div>
                    ))}
                    <div className='total'>
                        Total Carga Horária: <b>{MinhasPalestras.reduce((total, item) => total + item.CargaHoraria, 0)}</b>
                    </div>
                </div>
            ) : (
                <div className='triste'>Nenhuma Palestra Encontrada 🙁</div>
            )}
        </div>
    );

}

export default MinhasPalestras;
