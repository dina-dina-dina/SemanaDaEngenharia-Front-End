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
        const evento = localStorage.getItem('evento')
        const eventoresp = await axios.get(`/palestras/${evento}`)
            .catch(err => console.error('Error: ', err));
        if (eventoresp) setPalestras(eventoresp.data);
        console.log(eventoresp.data)
    }

    useEffect(() => {
        getEvento();
    }, [])

    function handleClick1(idPalestra,nomePalestra) {
        navigate(`/feedbackPalestra?&id=${idPalestra}`,{state:{nome:nomePalestra}});
      }

    return (

        <div>
            <div className='foto'>
                <img src={image} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
            </div>
            {
                palestras && palestras.map(function (array, index) {
                    return (

                        <div className='caixa'>

                            <div className="card"onClick={() => {handleClick1(array.idPalestrasEvento,array.palestra.nomePalestra) }}>
                                
                                <div className="TextCard" >
                                    <div className='teste'>
                                    <h2 style={{ fontSize: '3vh' }} >Palestra: {array.palestra.nomePalestra} MEIO AMBIENTE EM CHAMAS</h2>
                                    <h1 style={{ fontSize: '2vh', color:'#71a1f0' }} >Palestrante:{array.palestra.palestrante}</h1>
                                    </div>
                                </div>
                                <div className='confirmacao'>Clique para realizar feedback de confirmação</div>

                            </div>
                        </div>

                    )


                })
            }


        </div>



    )
}

export default UserLogin;
