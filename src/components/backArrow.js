import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackArrow = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} style={{ cursor: 'pointer' }}>
      &larr;
    </button>
  );
};

export default GoBackArrow;