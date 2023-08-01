import './newHome.css';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios'
import image from '../../assets/SemanaEngCirc.png'

function NewHomeAlunos() {


  const navigate = useNavigate();

  function handleClick1() {
    navigate("/");
  }
  function handleClick2() {
    navigate("/");
  }


  
  return (
    <div className="container">
        <div className='formulario'>
        <img src={image} alt="icon" width={"100%"}></img>

        <div className='button'>
                <button onClick={handleClick1} >Cadastrar em Palestras</button>
        </div>
        <div className='button'>
                <button onClick={handleClick2}>Minhas Palestras</button>
        </div>
        </div>



    </div>

  );
}

export default NewHomeAlunos;
