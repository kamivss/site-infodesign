import React from 'react'
import imglandingpage from '../images/erp-image.svg'

const landingpage = () => {
  return (
    <div className="landing-page">
      <div className="content-section">
      <h1><span>O que é ERP?</span> <br/>
      Entenda como funciona o sistema de gestão Infodesign</h1>
      <button  className='btn-light' id='btn'>Comece agora</button>
    </div>
      <div className="image-section">
        <img src={imglandingpage} alt="Imagem" />
      </div>
    </div>
  )
}

export default landingpage