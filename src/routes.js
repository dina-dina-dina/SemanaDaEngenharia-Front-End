import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Login from './paginas/login/App';
import Eventos from './paginas/eventos/Eventos';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/eventos" element={<Eventos/>} />

            </Routes>

        </Router>


    );
}

export default Rotas;