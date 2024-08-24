import { useNavigate } from 'react-router-dom';
import '../../paginas/novoEvento/novoEvento.css'
import React, { useState, useContext, useEffect } from 'react';
import xlsx from 'xlsx';
import axios from '../../axios';





function CadastrarProfessor() {
    const [nome, setNome] = useState(String)
    const [email, setEmail] = useState(String)
    const [turma, setTurma] = useState(Array)
    const navigate = useNavigate();

    const [materiaList, setmateriaList] = useState([]);
    const handleMateriaChange = (index, newValue) => {
        const updatedList = [...materiaList];
        updatedList[index] = newValue;
        setmateriaList(updatedList);
    };

    const handleAddMateria = () => {
        setmateriaList([...materiaList, '']);
    };

    const handleRemoveEmail = (index) => {
        const updatedList = materiaList.filter((_, i) => i !== index);
        setmateriaList(updatedList);
    };


    async function handleClick() {


        try {

            const response = await axios.post("/professor", {
                "email": email,
                "nome": nome,
                "materia":materiaList
            }).catch(err => alert(err));
            if (response) {
                alert("Professor cadastrado com sucesso!")
                const updatedList = []
                window.location.reload();
                // navigate("/obrigado");
            }



        } catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
    },)



    // const readUploadFile = (e) => {
    //     e.preventDefault();
    //     if (e.target.files) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             const data = e.target.result;
    //             const workbook = xlsx.read(data, { type: "array" });
    //             const json = []
    //             for (let i = 0; i < workbook.SheetNames.length; i++) {
    //                 const sheetName = workbook.SheetNames[i];
    //                 const worksheet = workbook.Sheets[sheetName];
    //                 let object = xlsx.utils.sheet_to_json(worksheet);
    //                 json.push(object)
    //             }
    //             setTurma(json)


    //         };
    //         reader.readAsArrayBuffer(e.target.files[0]);
    //     }
    // }


    // var array = turma.reduce((list, sub) => list.concat(sub), [])
    // console.log(array)

    useEffect(() => {
        if (localStorage.getItem('authenticated') !== 'true') navigate('/');
    }, [])

    // function handleClick() {
    //     navigate("/eventos");
    //   }

    return (
        <div className='containerNew'>

            <div className='formularioEvento'>
                <span id='title'>PROFESSOR</span>
                <div className='itensForms'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle'>Nome</label>
                            <input id='inputStyleEvento' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Email</label>
                            <input id='inputStyleEvento' type={'email'} onChange={(event) => setEmail(event.target.value)}></input>
                        </div>


                    </form>
                    
                    <div className='materias'>
                    <div id="title">Materias</div>
                        <div className='insert'>

                        </div>
                        {materiaList.map((email, index) => (
                            <div className = 'lista' key={index}>
                                <input
                                    id='inputStyleEvento'
                                    type="email"
                                    value={email}
                                    onChange={(e) => handleMateriaChange(index, e.target.value)}
                                />
                                <div className='tatu'>
                                    <button onClick={() => handleRemoveEmail(index)}>Remove</button>
                                </div>
                            </div>
                        ))}
                        <div className='tatu2'>
                            <button onClick={handleAddMateria}>Adicionar Matéria</button>
                        </div>
                    </div>
                    <div className='botao' >
                        <button type='button' onClick={() => handleClick()}>Cadastrar</button>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default CadastrarProfessor;
