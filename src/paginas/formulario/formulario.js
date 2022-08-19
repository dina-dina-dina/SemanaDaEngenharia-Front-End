import { useNavigate } from 'react-router-dom';
import '../../paginas/formulario/formulario.css'
import React, { useState, useContext, useEffect } from 'react';
import SemanaEng from '../../assets/SemanaEng.jpg'
import axios from '../../axios';



function Formulario() {
    const [nome, setNome] = useState(String)
    const [email, setEmail] = useState(Number)
    const [ra, setRa] = useState(Number)
    const navigate = useNavigate();
    const [turma, setTurma] = useState(String)
    const [feedback, setFeedback] = useState(String)
    const [idTurma, setIdTurma] = useState(Number)











    async function Envio() {
        var stringUrl = window.location.href;
        var positionInterrogation = stringUrl.indexOf("?");
        var idUrl = stringUrl.substring(positionInterrogation + 1);
        idUrl = decodeURIComponent(idUrl);
        console.log(idUrl)

        try {
            if (nome && email && ra && idTurma && feedback  ) {
                const response = await axios.post(`/formulario/${idUrl}`, {
                    "nomeAluno": nome,
                    "feedback": feedback,
                    "email": email,
                    "ra": ra,
                    "idTurma": idTurma,

                }).catch(err => alert(err));
                if (response) {
                    alert("Cadastrado realizado com sucesso!")
                }

            } else alert('Preencha todos os campos')

        } catch (err) {
            alert(err)
        }






    }





    function handleClick() {
        navigate("/palestras");
    }

    return (
        <div className='containerNew2'>

            <div className='formulario22'>
                <img src={SemanaEng} id='tittle2'></img>
                <div className='itensForms2'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle2'>Nome</label>
                            <input id='inputStyle2' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>Email</label>
                            <input id='inputStyle2' onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className='data2'>
                            <label id='labelStyle2'>RA</label>
                            <input id='inputStyle2' type={'number'} onChange={(event) => setRa(event.target.value)}></input>
                        </div>
                        <div className='nome2'>
                            <label id='labelStyle2'>Turma</label>
                            <input id='inputStyle2' onChange={(event) => setIdTurma(event.target.value)}></input>
                        </div>

                        <div className='feedback'>
                            <label id='labelStyle2'>Feedback</label>
                            <textarea id='inputStyleFb' onChange={(event) => setFeedback(event.target.value)}></textarea>
                        </div>
                        <div className='botao2'>
                            <button type="button" className="salvar" onClick={() => Envio()} >SALVAR</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default Formulario;
