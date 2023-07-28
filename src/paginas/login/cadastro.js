import { useNavigate } from 'react-router-dom';
import '../../paginas/login/cadastro.css';
import jpIMG from '../../assets/SemanaEng.jpg';
import React, { useState, useContext, useEffect } from 'react';
import axiosLogin from '../../axiosLogin';



function Cadastro() {
    const [email, setEmail] = useState(String)
    const [nome, setNome] = useState(String)
    const [ra, setRA] = useState(Number)
    const [turma, setTurma] = useState(Number)
    const [estagio, setEstagio] = useState(false)
    const [senha, setSenha] = useState(String)
    const [senha2, setSenha2] = useState(String)
    const [isChecked, setIsChecked] = useState(false);


    const navigate = useNavigate();

    function handleClick() {
        setIsChecked((prev) => !prev)
        console.log(isChecked)
    }

    const countries = [
            { value: "0", text: "Select" },
            { value: "1", text: "Eng. De Controle e Automação" },
            { value: "2", text: "Eng. Ambiental" },
        ]
        const [cursoValue, setCursoValue] = useState(String)
        const options = countries.map((option) => {
            return <option
                key={option.value}
                value={option.value}
                selected={option.value === cursoValue}>{option.text}
            </option>
        })
    

        return (
            <div className="container">
                <div className="login">



                    <div className='formulario'>
                        <form>
                            <span className='titulo'>Faça seu Cadastro!</span>
                            <div className='input'>
                                <div className='nome'>
                                    <label>Nome</label>
                                    <input type='text' alt="Input de nome" placeholder='Nome' onChange={(event) => setNome(event.target.value)}></input>
                                </div>
                                <div className='ra'>
                                    <label>RA</label>
                                    <input type='number' placeholder='000000000' onChange={(event) => setRA(event.target.value)}></input>
                                </div>
                                <div className='turma'>
                                    <label>Turma</label>
                                    <input type='number' placeholder='00' onChange={(event) => setTurma(event.target.value)}></input>
                                </div>
                                <div className='telefone'>
                                    <label>Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" placeholder="(00) 0000-0000" pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" required></input>
                                </div>
                                <div className="curso">
                                    <label>Curso:</label>
                                    <select onChange={(e) => setCursoValue(e.target.value)}>
                                        {options}
                                    </select>
                                </div>
                                <div className='email'>
                                    <label>Email</label>
                                    <input type='email' alt="Input de email" placeholder='Email' onChange={(event) => setEmail(event.target.value)}></input>
                                </div>
                                <div className='password'>
                                    <label>Senha</label>
                                    <input type='password' placeholder='Senha' onChange={(event) => setSenha(event.target.value)}></input>
                                </div>
                                <div className='password'>
                                    <label>Confirme sua senha</label>
                                    <input type='password' placeholder='Confirme a Senha' onChange={(event) => setSenha2(event.target.value)}></input>
                                </div>
                                <div className='estagio'>
                                    <label>Está estagiando?</label>
                                    <input className={isChecked ? "checked" : ""} checked={isChecked} type='checkbox' onChange={handleClick}></input>
                                </div>

                                <div className='button' >
                                    <button type='button'>ENTRAR</button>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>

            </div>

        );
    }

    export default Cadastro;
