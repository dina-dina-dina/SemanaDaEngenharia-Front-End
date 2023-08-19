import './newHome.css';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios'
import image from '../../assets/SemanaEngCirc.png'

function NewHomeAlunos() {


  const navigate = useNavigate();

  function handleClick1() {
    navigate("/HomePalestraEventos");
  }
  function handleClick2() {
    navigate("/minhasPalestras");
  }

  const [evento, setEvento] = useState({})


  const getEvento = async () => {
    const response = await axios.get('/checkData')
        .catch(err => console.error('Error: ', err));
    if (response) setEvento(response.data);
    console.log(response)
    await localStorage.setItem('evento',response.data.idEvento)

}

  useEffect(() => {
    getEvento();
  }, [])

  return (
    <div className="container">
      <div className='formulario'>
        <img src={image} alt="icon" width={"100%"}></img>
        <div>Evento atual:</div>
        <div>{evento.nomeEvento}</div>
        <div className='button'>
          <button onClick={handleClick1} >Todas as Palestras</button>
        </div>
        <div className='button'>
          <button onClick={handleClick2}>Minhas Palestras</button>
        </div>
      </div>
    </div>

  );
}

export default NewHomeAlunos;
