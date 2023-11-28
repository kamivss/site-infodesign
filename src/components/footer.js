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
           (31)98825-6675 
            <br/>
            queiroz@infodesign.dev.br 
            <br/>
            Rua Pelotas, 488 - Alvorada
            <br/>
            Contagem - MG, 32042-400 Brasil 
        </div>
      </footer>
    );
  }

export default footer;