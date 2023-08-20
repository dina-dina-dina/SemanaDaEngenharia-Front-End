import './professoresMeus.css';
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../axios'
import image from '../../assets/logosemanaCentrr.png'
import GoBackArrow from '../../components/backArrow';

function MeusProfessores() {

    const isSpecialCondition = true; // Replace with your actual condition

    const navigate = useNavigate();

    function handleClick1() {
        navigate("/");
    }
    function handleClick2() {
        navigate("/");
    }

    const [Materias, Metmaterias] = useState({})
    const [minhas, setMinhas] = useState([])
    const [selectedMateriaIds, setSeletas] = useState([])

    const getMinhas = async () => {
        const queryParams = {
            param1: localStorage.getItem('user'),
        }
        const resposta = await axios.get('/professor/minhas', { params: queryParams })

            .catch(err => console.error('Error: ', err));
        if (resposta) {
            const array = resposta.data

            const idMateriaValues = array.map(item => item.idMateria);


            await setSeletas(idMateriaValues);
            console.log(idMateriaValues)
        }
    }

    const getMaterias = async () => {
        // const queryParams = {
        //     param1: localStorage.getItem('user'),
        //     param2: localStorage.getItem('evento')
        // }
        const response = await axios.get('/professor/materias')
            .catch(err => console.error('Error: ', err));
        if (response) await Metmaterias(response.data);
        console.log(response)

    }


    async function handleClick3(idMateria) {


        try {
            const response = axios.post('/professor/cadastroaluno', {
                "idMateria": idMateria,
                "idUsuario": localStorage.getItem('user'),
            })
            if (response) {
                alert("Materia cadastrada com sucesso!")
                window.location.reload();
            }



        } catch (err) {
            alert(err)
        }
    }

    async function handleClick2(idMateria) {


        try {
            const response = axios.post('/professor/removerMateria', {
                "idMateria": idMateria,
                "idUsuario": localStorage.getItem('user'),
            })
            if (response) {
                alert("Materia removida com sucesso!")
                window.location.reload();
            }

        } catch (err) {
            alert(err)
        }
    }



    useEffect(() => {
        getMaterias()
        getMinhas()
    }, [])

    return (
        <><div><GoBackArrow /></div>
        <div className='geral'>
            

            <div className='foto'>
                <img src={image} alt="icon" width={"100%"} style={{ alignSelf: 'center' }}></img>
            </div>
            {Materias.length > 0 ? (
                <div className='todas'>
                    {Materias.map((professor) => (
                        <div key={professor.idProfessor}>
                            <div className='profe'>{professor.nome}</div>
                            <div className='entries'>
                                {professor.materias.map((materia) => (
                                    <div key={materia.idMateria}
                                        onClick={selectedMateriaIds.includes(materia.idMateria)
                                            ? () => handleClick2(materia.idMateria)
                                            : () => handleClick3(materia.idMateria)} className='entradaprofe'
                                        style={
                                            selectedMateriaIds.includes(materia.idMateria)
                                                ? { backgroundColor: 'rgb(136, 189, 150)' }
                                                : { backgroundColor: 'rgb(240, 77, 77)' }
                                        }>
                                        <div className='topicoprofe'>{materia.titulo}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                <div className='triste'>Nenhum Professor Encontrado 😴</div>
            )}
        </div>
        </>
        
    );

}

export default MeusProfessores;
