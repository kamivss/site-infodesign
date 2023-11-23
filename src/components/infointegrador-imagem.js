import React from 'react'
import './infointegrador-imagemstyles.css'
import Imagemcomputer from '../images/infointegradorcomputer.svg'


const imagem = () => {
  return (
    <div className="landing-page">
      <div className="content-section">
        <p className='info-text'> Nossa ferramenta proporciona uma gestão unificada de vendas, simplificando o controle de entradas e saídas em um painel único e intuitivo. Eliminamos a necessidade de alternar entre diferentes interfaces para garantir eficiência e objetividade.</p>
        <button className='btn-dark' id='btn'>Comece a integrar</button>
      </div>
      <div className='img-computer'>
        <img src={Imagemcomputer} />
      </div>
    </div>
  )
}

export default imagem