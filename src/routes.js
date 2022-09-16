import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './paginas/login/App';
import Eventos from './paginas/eventos/Eventos';
import NovoEvento from './paginas/novoEvento/novoEvento';
import CadastrarProfessor from './paginas/professor/cadastrarProfessor';
import Palestras from './paginas/palestras/palestras';
import NovaPalestra from './paginas/novaPalestra/novaPalestra';
import Formulario from './paginas/formulario/formulario';
import Alunos from './paginas/alunos/alunos';
import Qrcode from './paginas/qrcode/qrcode';
import Obrigado from './paginas/obrigado/obrigado';
import VisualizarForms from './paginas/visualizarForms/visualizarForms';
import AlunosAll from './paginas/allAlunos/allAlunos';



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
                <Route path="/formulario" element={<Formulario/>} />
                <Route path="/alunos" element={<Alunos/>} />
                <Route path="/qrcode" element={<Qrcode/>} />
                <Route path="/obrigado" element={<Obrigado/>} />
                <Route path="/visualizarForms" element={<VisualizarForms/>} />
                <Route path="/allAlunos" element={<AlunosAll/>} />

            </Routes>

        </Router>


    );
}

export default Rotas;