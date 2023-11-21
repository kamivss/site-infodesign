import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Ainfodesign from './pages/Ainfodesign';
import Servicos from "./pages/serviços";
import Empresas from './pages/empresas';
import TrabalheConosco from './pages/trabalheconosco';
import Controledeacesso from './pages/controledeacesso';
import Infointegrador from './pages/infointegrador';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ainfodesign" element={<Ainfodesign />} />
          <Route path="/serviços" element={<Servicos />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/trabalheconosco" element={<TrabalheConosco />} />
          <Route path="/controledeacesso" element={<Controledeacesso />} />
          <Route path="/infointegrador" element={<Infointegrador />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

