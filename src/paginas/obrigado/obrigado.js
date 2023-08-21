import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import '../../paginas/obrigado/obrigado.css'
import SemanaEng from '../../assets/SemanaEng.jpg'
<<<<<<< HEAD
import { QrReader } from 'react-qr-reader';
=======
import Webcam from "react-webcam";
>>>>>>> 682e81c68cd2c622ccd2e9de240ca70e7446bebe



function Obrigado() {
    const [nome, setNome] = useState(String)
    const [dataInicio, setDataInicio] = useState(Date)
    const [dataFinal, setDataFinal] = useState(Date)
    const [data, setData] = useState('No result');

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
<<<<<<< HEAD
        <div className='vaitudo'>
            <img src={SemanaEng} id='title45'></img>
            <QrReader
                    onResult={(result, error) => {
                        if (!!result) {
                            setData(result?.text);
                        }

                        if (!!error) {
                            console.info(error);
                        }
                    }}
                    style={{ width: '100%' }}
                />
                <p>{data}</p>
            <div className='containerNew3'>

              


                <span id='title5'>Obrigado! =)</span>



            </div>
        </div>
=======
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

>>>>>>> 682e81c68cd2c622ccd2e9de240ca70e7446bebe



    );
}

export default Obrigado;
