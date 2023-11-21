import React from 'react';
import './footerstyles.css'
import { Link } from 'react-router-dom';
const footer = () => {
  return (
      <footer className="footer">
        <div className="section">
          <h3>Infodesign</h3>
          <Link to="">Sobre nós</Link>
          <Link to="">Politica de privacidade</Link>
          <Link to="">Termos de uso</Link>
          <Link to="">Fale conosco</Link>
        </div>
        <div className="section">
          <h3>Empresas</h3>
          <Link to="">Harmonizepay</Link>
          <Link to="S">Infoprojects</Link>
        </div>
        <div className="section">
          <h3>Contato</h3>
          <Link to="">Texto de contato</Link>
        </div>
      </footer>
    );
  }

export default footer;