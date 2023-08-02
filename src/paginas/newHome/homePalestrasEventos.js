import { useNavigate } from 'react-router-dom';
import '../../paginas/login/login.css';
import jpIMG from '../../assets/SemanaEng.jpg';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';
import image from '../../assets/SemanaEngCirc-removebg.png'
import axios from '../../axios'



function UserLogin() {
    const [email, setEmail] = useState(String)
    const [senha, setSenha] = useState(String)
    const navigate = useNavigate();
    const [evento, setEvento] = useState({})
    const [palestras, setPalestras] = useState([])


    const getEvento = async () => {
        const response = await axios.get('/checkData')
            .catch(err => console.error('Error: ', err));
        if (response) setEvento(response);
        console.log(response)
        const eventoresp = await axios.get(`/palestras/${evento.data.idEvento}`)
            .catch(err => console.error('Error: ', err));
        if (eventoresp) setPalestras(eventoresp.data);
        console.log(eventoresp.data)
    }

    const getPalestras = async () => {

    }

    useEffect(() => {
        getEvento();
    }, [])


    return (

        <div>
            <div className='foto'>
                <img src={image} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
            </div>
            {console.log(palestras)}
            {
                palestras && palestras.map(function (array, index) {
                    return (

                        <div className='caixa'>

                            <div className="card" >
                                
                                <div className="TextCard">
                                    <h2 style={{ fontSize: '3vh' }} >Palestra: {array.palestra.nomePalestra}</h2>
                                    <h1 style={{ fontSize: '2vh' }} >Palestrante:{array.palestra.palestrante}</h1>

                                </div>
                                <div className='inscricao'>Inscrito:{}</div>
                            </div>
                        </div>

                    )


                })
            }


        </div>



    )
}

export default UserLogin;
