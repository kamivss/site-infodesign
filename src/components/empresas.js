import React from 'react'
import './empresasstyles.css'
import { Link } from 'react-router-dom'

const empresas = () => {
    return (
            
        <div className='card-box'>
            <div className='card-text'>
                <h1>Empresas</h1>
                <p>SAIBA MAIS SOBRE NOSSAS EMPRESAS<br /> ESTAMOS SEMPRE EM BUSCA<br /> DE CRESCIMENTO.</p>
            </div>
            <div class="card1">
                <div class="card-img">
                    <img src="https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1" />
                </div>
                <div class="desc">
                    <h6 class="primary-text">Harmonizepay</h6>
                    <h6 class="secondary-text">Empresa especializada em conciliação financeira, temos além de uma
                        solução sistemica também um processo de consultoria para apoio em
                        todo o fluxo de gestão dos valores a receber dos principais
                        MarketPlaces</h6>
                </div>
                <button id='btn-card' class="primary-text">View Profile</button>


            </div>
            <div class="card2">
                <div class="card-img">
                    <img src="https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1" />
                </div>
                <div class="desc">
                    <h6 class="primary-text">Infoprojects</h6>
                    <h6 class="secondary-text">Especializados em criar soluções das mais diversas, um time
                        altamente capacitado para atuar em conjunto com a sua empresa,
                        criando a solução personalizada que você necessita, levando o que a
                        de melhor em termos de tecnologia</h6>
                </div>
                <button id='btn-card' class="primary-text">View Profile</button>


            </div>
        </div>

    )
}

export default empresas