import './newHome.css';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios'
import image from '../../assets/logosemanaCentrr.png'

function NewHomeAlunos() {

  const images = [
    //'AEAS.jpg',
    //'Alura.jpg',
    //'AGI.png',
    'Dinamica.jpg',
    //'Fit.jpg',
    //'hairu_logo.jpg',
    //'Metso.jpg',
    //'P&G.png',
    //'Pieralisi.jpg',
    //'robtica_sp_logo.jpg',
    //'SEG.jpg',
    //'unesp.jpg',
    //'Voith.jpg',
    // Adicione mais imagens conforme necessário
  ];


  const navigate = useNavigate();

  function handleClick1() {
    navigate("/HomePalestraEventos");
  }
  function handleClick2() {
    navigate("/minhasPalestras");
  }
  function handleClick3() {
    navigate("/meusProfessores");
  }
  const [evento, setEvento] = useState({})


  const getEvento = async () => {
    const response = await axios.get('/checkData')
      .catch(err => console.error('Error: ', err));
    if (response) setEvento(response.data);
    console.log(response.data)
    await localStorage.setItem('evento', response.data.idEvento)

  }

  useEffect(() => {
    getEvento();
  }, [])

  return (
    <div className="container">
      <div className='formulario'>
        <img className='img' src={image} alt="icon" ></img>
        <div className='title'>Evento atual:</div>
        <div className='subtitle'>{evento.nomeEvento}</div>
        <div className='buttonhome'>
          <button onClick={handleClick1} >Todas as Palestras</button>
        </div>
        <div className='buttonhome'>
          <button onClick={handleClick2}>Minhas Palestras</button>
        </div>
        <span id ='apoio'>APOIO</span>
        <div className='image'>

          {images.map((image, index) => (
            <img key={index} src={process.env.PUBLIC_URL + `/image/${image}`} alt={`Imagem ${index + 1}`} />
          ))}


        </div>

      </div>
    </div>

  );
}

export default NewHomeAlunos;
