import React from 'react'
import './infointegrador-landingpagestyles.css'
import imglandingpage from '../images/image-infointegrador.svg'

const landingpage = () => {
  return (
    <div className="landing-page">
      <div className="content-section">
      <h1> <span>DESCOMPLIQUE</span> O <br/> DROPSHIPPING COM NOSSO <br/> HUB DE INTEGRAÇÃO</h1>
      <p>Simplificamos cada etapa permitindo que você se concentre <br/>no que faz de melhor impulsionar suas vendas</p>
      <button  className='btn-light' id='btn'>Comece agora</button>
    </div>
      <div className="image-section">
        <img src={imglandingpage} alt="Imagem" />
      </div>
    </div>
  )
}

export default landingpage