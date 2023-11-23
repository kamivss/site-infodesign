import React, { useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Ainfodesign from './pages/Ainfodesign';
import TrabalheConosco from './pages/trabalheconosco';
import Controledeacesso from './pages/controledeacesso';
import Infointegrador from './pages/infointegrador';
import Erp from './pages/erp';
import Infowms from './pages/infowms';
import Infoemissor from './pages/infoemissor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ainfodesign" element={<Ainfodesign />} />
        <Route path="/trabalheconosco" element={<TrabalheConosco />} />
        <Route path="/controledeacesso" element={<Controledeacesso />} />
        <Route path="/infointegrador" element={<Infointegrador />} />
        <Route path="/InfoWms" element={<Infowms />} />
        <Route path="/InfoEmissor" element={<Infoemissor />} />
        <Route path="/Erp" element={<Erp />} />
      </Routes>
    </Router>
  );
}

export default App;
