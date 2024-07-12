import { useNavigate } from 'react-router-dom';
import { IMaskInput } from "react-imask";
import './cadastro.css';
// import '../login/login.css'
import jpIMG from '../../assets/SemanaEng.jpg';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';
import axios from '../../axios';



function Cadastro() {
    const [email, setEmail] = useState(String)
    const [nome, setNome] = useState(String)
    const [ra, setRA] = useState(Number)
    const [turma, setTurma] = useState(Number)
    const [estagio, setEstagio] = useState(false)
    const [senha, setSenha] = useState(String)
    const [senha2, setSenha2] = useState(String)
    const [isChecked, setIsChecked] = useState(false);
    const [telefone, setTelefone] = useState(String)
    const [cursoValue, setCursoValue] = useState(String)

    const navigate = useNavigate();

    function clicker() {
        setIsChecked((prev) => !prev)
        console.log(isChecked)
    }

    const countries = [
        { value: "0", text: "Select" },
        { value: "1", text: "Eng. De Controle e Automação" },
        { value: "2", text: "Eng. Ambiental" },
    ]

    const options = countries.map((option) => {
        return <option
            key={option.value}
            value={option.value}
            selected={option.value === cursoValue}>{option.text}
        </option>
    })
    function validateEmail(entrada) {
        const emailInput = entrada;
        // Regular expression pattern to match a valid email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(emailInput);
    }
    async function handleClick() {
        try {
            if (senha != senha2) {
                throw new Error("Senha incompatível!")
            }

            if(!validateEmail(email)){
                throw new Error("Email inválido!")
            }

            if(!nome){
                throw new Error("Insira um nome!")
            }
           
        
            const response = await axios.post("/registerAluno", {
            "email": email,
            "nome": nome,
            "senha": senha,
            "ra": ra,
            "idTurma": turma,
            "estagio": isChecked,
            "telefone": telefone,
            "curso": cursoValue

        }).catch(err => alert(err));
        console.log(
            {
                "email": email,
                "nome": nome,
                "senha": senha,
                "ra": ra,
                "idTurma": turma,
                "estagio": isChecked,
                "telefone": telefone,
                "curso": cursoValue
            }
        )
        if (response) {
            alert("Aluno cadastrado com sucesso!")
            navigate("/");
        }
    } catch (err) {
        alert(err)
    }
}

return (
    <div className="containercadas">
        <div className="logincadas">
            <div className='formulariocadas'>
                <form>
                    <span className='tituloide' style={{ textAlign: 'center' }}>Faça seu Cadastro!</span>
                    <div className='input'>
                        <div className='turma'>
                            <label>Nome completo</label>
                            <input type='text' alt="Input de nome" placeholder='Nome' onChange={(event) => setNome(event.target.value)}></input>
                        </div>
                        <div className='turma'>
                            <label>RA</label>
                            <IMaskInput type='number' placeholder='000000000' mask="000000000" onChange={(event) => setRA(event.target.value)} />
                        </div>
                        <div className='turma'>
                            <label>Turma</label>
                            <IMaskInput type='number' placeholder='00' mask="00" onChange={(event) => setTurma(event.target.value)} />
                        </div>
                        <div className='turma'>
                            <label>Telefone</label>
                            <IMaskInput type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" mask="(00) 00000-0000" pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" required onChange={(event) => setTelefone(event.target.value)} />
                        </div>
                        <div className="curso">
                            <label>Curso:</label>
                            <select onChange={(e) => setCursoValue(e.target.value)}>
                                {options}
                            </select>
                        </div>
                        <div className='turma'>
                            <label>Email</label>
                            <input type='email' alt="Input de email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
                        </div>
                        <div className='turma'>
                            <label>Senha</label>
                            <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
                        </div>
                        <div className='turma'>
                            <label>Confirme sua senha</label>
                            <input type='password' placeholder='Confirme a senha' onChange={(event) => setSenha2(event.target.value)}></input>
                        </div>
                        <div className='estagioSuperior'>
                            <div className='estagio'>
                                <label>Está estagiando?</label>
                                <input className={isChecked ? "checked" : ""} checked={isChecked} type='checkbox' onChange={clicker}></input>
                            </div>
                        </div>

                        <div className='buttoncadas' >
                            <button type='button' onClick={() => handleClick()}>ENTRAR</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default Cadastro;
