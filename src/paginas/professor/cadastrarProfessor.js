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



    async function handleClick() {


        try {

            const response = await axios.post("/professor", {
                "email": email,
                "nome": nome,
                "chamada": turma,


            }).catch(err => alert(err));
            if (response) {
                alert("Professor cadastrado com sucesso!")
                // navigate("/obrigado");
            }



        } catch (err) {
            alert(err)
        }






    }




    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const json = []
                for (let i = 0; i < workbook.SheetNames.length; i++) {
                    const sheetName = workbook.SheetNames[i];
                    const worksheet = workbook.Sheets[sheetName];
                    let object = xlsx.utils.sheet_to_json(worksheet);
                    json.push(object)
                }
                setTurma(json)

            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    // function handleClick() {
    //     navigate("/eventos");
    //   }

    return (
        <div className='containerNew'>

            <div className='formulario2'>
                <span id='tittle'>PROFESSOR</span>
                <div className='itensForms'>
                    <form>


                        <div className='nome'>
                            <label id='labelStyle'>Nome</label>
                            <input id='inputStyle' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Email</label>
                            <input id='inputStyle' type={'email'} onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className='data'>
                            <label id='labelStyle'>Chamada</label>
                            <input id='inputStyle' type='file' accept='.xlsx' onChange={readUploadFile} />
                            {/* <input type='file' id='inputStyle'  onChange={(event) => setTurma(event.target.value)}></input> */}
                        </div>
                        <div className='botao' >
                            <button type='button' onClick={() => handleClick()}>Cadastrar</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>


    );
}

export default CadastrarProfessor;
