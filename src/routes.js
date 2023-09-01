import React from 'react';
import { HashRouter as Router, Routes, Route, } from 'react-router-dom';
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
import UserLogin from './paginas/login/LoginAlunos';
import Cadastro from './paginas/cadastro/cadastro'
import NewHomeAlunos from './paginas/newHome/newHomeAlunos';
import HomePalestraEventos from './paginas/newHome/homePalestrasEventos';
import FeedbackPalestras from './paginas/feedbackPalestras/feedback';
import QrCode2 from './paginas/feedbackPalestras/qrcode2'
import MinhasPalestras from './paginas/minhasPalestras/minhasPalestras';
import MeusProfessores from './paginas/meusProfessores/meusProfessores';
import Especial from './paginas/feedbackPalestras/especial';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserLogin/>} />
                <Route path="/minhasPalestras" element={<MinhasPalestras/>}/>
                <Route path="/feedbackPalestra" element={<FeedbackPalestras/>}/>
                <Route path="/qrCode2" element={<QrCode2/>}/>
                <Route path="/meusProfessores" element={<MeusProfessores/>}/>
                <Route path="/AlunosHomePage" element={<NewHomeAlunos/>} />
                <Route path="/HomePalestraEventos" element={<HomePalestraEventos/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="/novoEvento" element={<NovoEvento/>} />
                <Route path="/professor" element={<CadastrarProfessor/>} />
                <Route path="/palestras" element={<Palestras/>} />
                <Route path="/novaPalestra" element={<NovaPalestra/>} />
                <Route path="/formulario" element={<Formulario/>} />
                <Route path="/especial" element={<Especial/>} />
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