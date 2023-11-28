// sobre.js

import React from 'react';
import './sobrestyles.css';
import imagem from '../images/Rectangle 50.svg';

const Sobre = () => {
  return (
    <div  id='sobre' className='sobre'>
      <div>
        <img src={imagem} alt="Imagem" className='imagem' />
      </div>
      <div className='text'>
        <h1> OFERECEMOS SOLUÇÕES PARA SUA EMPRESA 
          ATENDENDO DIVERSAS NECESSIDADES  </h1>
        <p className='p1'>Na Infodesign, nosso compromisso é exemplificado pela dedicação
          à oferta de sistemas prontos, um domínio no qual fornecemos suporte 
          integral e consultoria especializada aos nossos estimados parceiros.</p>

        
          
        
      </div>
    </div>
  );
}

export default Sobre;
