import React from 'react';
import { useNavigate } from 'react-router-dom';
import './backArrow.css'


const GoBackArrow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/AlunosHomePage');
  };

  return (
    <>
    {/* <button className='arrow' onClick={goBack} style={{ cursor: 'pointer' }}>
      {"<"}
    </button> */}
    </>
    
  );
};

export default GoBackArrow;