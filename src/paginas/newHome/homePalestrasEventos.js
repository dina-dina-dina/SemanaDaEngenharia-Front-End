import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';
import image from '../../assets/logosemanaCentrr.png'
import axios from '../../axios'
import GoBackArrow from '../../components/backArrow';



function UserLogin() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const navigate = useNavigate();
    const [evento, setEvento] = useState({})
    const [palestras, setPalestras] = useState([])
    const [Dias, setDias] = useState([])


    function addHoursAndConvertToWeekday(sqlDate, hoursToAdd) {
        // Parse the SQL date string into a JavaScript Date object
        const originalDate = new Date(sqlDate);
      
        // Add hoursToAdd hours to the date
        const modifiedDate = new Date(originalDate.getTime() + hoursToAdd * 60 * 60 * 1000);
      
        const weekdaysList = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const weekday = weekdaysList[modifiedDate.getUTCDay()];
      
        return weekday;
      }





    const getEvento = async () => {
        const evento = localStorage.getItem('evento')
        const eventoresp = await axios.get(`/palestras/${evento}`)
            .catch(err => console.error('Error: ', err));
        if (eventoresp) setPalestras(eventoresp.data);
        console.log(eventoresp.data)
    }
    const getDias = async () => {
        const evento = localStorage.getItem('evento')
        const diasresp = await axios.get(`/palestras/dias/${evento}`)
            .catch(err => console.error('Error: ', err));
        if (diasresp) setDias(diasresp.data);
        console.log(diasresp.data)
    }
    useEffect(() => {
        getEvento();
        getDias();

    }, [])

    function handleClick1(idPalestra, nomePalestra) {
        navigate(`/feedbackPalestra?&id=${idPalestra}`, { state: { nome: nomePalestra } });
    }

    return (
        <div>
            <GoBackArrow />
            <div className='fotohome'>
                <img src={image} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
            </div>
            {Dias &&
                Dias.map(function (array, index) {
                    return (
                        <div key={index} className='caixa'>
                            <div className='dia'>{addHoursAndConvertToWeekday(array,3)}</div>
                            {palestras &&
                                palestras.map(function (item, innerIndex) {
                                    // Check if item.palestra.dia is equal to the array value
                                    if (item.palestra.dia === array) {
                                        return (
                                            <div key={innerIndex} className='card' onClick={() => { handleClick1(item.idPalestrasEvento, item.palestra.nomePalestra) }}>
                                                <div className="TextCard">
                                                    <div className='teste'>
                                                        <h2 style={{ fontSize: '3vh' }}>Palestra: {item.palestra.nomePalestra}</h2>
                                                        <h1 style={{ fontSize: '2vh', color: '#71a1f0' }}>Palestrante: {item.palestra.palestrante}</h1>
                                                    </div>
                                                </div>
                                                <div className='confirmacao'>Clique para realizar feedback de confirmação</div>
                                            </div>
                                        );
                                    }
                                    // If not, return null (or any other placeholder element)
                                    return null;
                                })}
                        </div>
                    );
                })}
        </div>
    );












}

export default UserLogin;
