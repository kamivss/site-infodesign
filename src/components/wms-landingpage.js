import React from 'react'
import imglandingpage from '../images/wms-image.svg'
const landingpage = () => {
  return (
    <div className="landing-page">
    <div className="content-section">
    <h1> <span>Simplifique</span> a gestão do seu estoque <span>controle</span>  <br/>entrada e saída com facilidade</h1>
    <button  className='btn-light' id='btn'>Comece agora</button>
  </div>
    <div className="image-section">
      <img src={imglandingpage} alt="Imagem" />
    </div>
  </div>
  )
}

export default landingpage