// sobre.js

import React from 'react';
import './sobrestyles.css';
import imagem from '../images/Rectangle 50.svg';

const Sobre = () => {
  return (
    <div className='sobre'>
      <div>
        <img src={imagem} alt="Imagem" className='imagem' />
      </div>
      <div className='text'>
        <h1>CRIAMOS SOLUÇÕES PARA SUA EMPRESA 
            ATENDENDO DIVERSAS
          NECESSIDADES  </h1>
        <p className='p1'>A Infodesign destaca-se como líder em nosso Grupo de Empresas,consolidando-se
          como a principal referência em três áreas distintas de atuação: Sistemas Prontos,
          Projetos Personalizados e Conciliação Financeira.</p>

        <p className='p2'>
          Na Infodesign, nosso compromisso é exemplificado pela dedicação
          à oferta de sistemas prontos, um domínio no qual fornecemos suporte 
          integral e consultoria especializada aos nossos estimados parceiros.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
