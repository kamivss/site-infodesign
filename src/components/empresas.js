import React from 'react'
import './empresasstyles.css'
import { Link } from 'react-router-dom'
import logoharmonizepay from '../images/logotipo-harmonizepay.svg'
import logoinfoprojects from '../images/logotipo-infoprojects.svg'
const empresas = () => {
    return (
            
        <div id='empresas' className='card-box'>
            <div className='card-text'>
                <h1>Empresas</h1>
                <p>SAIBA MAIS SOBRE NOSSAS EMPRESAS<br /> ESTAMOS SEMPRE EM BUSCA<br /> DE CRESCIMENTO.</p>
            </div>
            <div class="card1">
                <div class="card-img">
                    <img src={logoharmonizepay} />
                </div>
                <div class="desc">
                    <h6 class="primary-text">HARMONIZEPAY</h6>
                    <h6 class="secondary-text">Somos uma empresa especializada em conciliação financeira. Oferecemos mais do que apenas uma solução sistêmica fornecemos um processo abrangente de consultoria para auxiliar em todo o fluxo de gestão dos valores a receber dos principais marketplaces.</h6>
                </div>
                <button className='btn-card'>Acessar</button>


            </div>
            <div class="card2">
                <div class="card-img">
                <img src={logoinfoprojects} />
                </div>
                <div class="desc">
                    <h6 class="primary-text">INFOPROJECTS</h6>
                    <h6 class="secondary-text">Nosso time é especializado em desenvolver soluções diversas para atender às suas necessidades específicas. Contamos com uma equipe altamente capacitada pronta para colaborar com a sua empresa. </h6>
                </div>
                <button className='btn-card'>Acessar</button>


            </div>
        </div>

    )
}

export default empresas