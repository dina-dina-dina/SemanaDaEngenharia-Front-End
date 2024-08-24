import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import axios from '../../axios';



function NovaPalestra() {
    const [nome, setNome] = useState(String)
    const [palestrante, setPalestrante] = useState(Date)
    const [cargaHoraria, setCargaHoraria] = useState(Date)
    const navigate = useNavigate();
    const [Dia, setDia] = useState(Date)

    
    async function Envio() {
        var stringUrl = window.location.href;
        var positionInterrogation = stringUrl.indexOf("&");
        var idUrl = stringUrl.substring(positionInterrogation + 4);

        idUrl = decodeURIComponent(idUrl);
           

        try {
            if (nome && palestrante && cargaHoraria) {
                console.log(idUrl)
                const response = await axios.post('/palestras', {
                    "nomePalestra": nome,
                    "palestrante": palestrante,
                    "cargaHoraria": cargaHoraria,
                    "dia":Dia,
                    "idEvento": idUrl
                }).catch(err => alert(err));
                if (response) {
                    console.log(response)
                    alert("Palestra criada com sucesso!")
                    navigate(`/palestras?&id=${idUrl}`);
                }

            } else alert('Preencha todos os campos')

        } catch (err) {
            alert(err)
        }






    }
    function handleClick() {
        navigate("/palestras");
      }

      useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');

       
    }, [])
      

    return (
        <div className='containerNew'>
             
            <div className='formularioEvento'>
                    <span id = 'title'>PALESTRA</span>
                <div className='itensForms'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle'>Nome</label>
                            <input id='inputStyleEvento' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Palestrante</label>
                            <input id='inputStyleEvento' type={'text'} onChange={(event) => setPalestrante(event.target.value)}></input>
                        </div>
                        
                        <div className='data'>
                            <label id='labelStyle'>Carga Horária</label>
                            <input id='inputStyleEvento' type={'number'} onChange={(event) => setCargaHoraria(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Data de Inicio</label>
                            <input id='inputStyleEvento' type={'date'} onChange={(event) => setDia(event.target.value)}></input>
                        </div>
                        <div className='botao' >
                            <button  type = 'button' onClick={()=> Envio()}>Criar Palestra</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default NovaPalestra;
