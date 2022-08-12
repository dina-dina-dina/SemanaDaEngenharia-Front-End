import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './paginas/login/App';
import Eventos from './paginas/eventos/Eventos';
import NovoEvento from './paginas/novoEvento/novoEvento';
import CadastrarProfessor from './paginas/professor/cadastrarProfessor';
import Palestras from './paginas/palestras/palestras';
import NovaPalestra from './paginas/novaPalestra/novaPalestra';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="/novoEvento" element={<NovoEvento/>} />
                <Route path="/professor" element={<CadastrarProfessor/>} />
                <Route path="/palestras" element={<Palestras/>} />
                <Route path="/novaPalestra" element={<NovaPalestra/>} />

            </Routes>

        </Router>


    );
}

export default Rotas;