import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import '../../paginas/obrigado/obrigado.css'
import SemanaEng from '../../assets/SemanaEng.jpg'
import Webcam from "react-webcam";



function Obrigado() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)

    // const [idUrl, setIdUrl] = useState(String)
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };

    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );






    return (
        // <div className='vaitudo'>
        //     <img src={SemanaEng} id='title45'></img>
        //     <div className='containerNew3'>
        <>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Capture photo</button>
        </>



        //         <span id='title5'>Obrigado! =)</span>



        //     </div>
        // </div>




    );
}

export default Obrigado;
