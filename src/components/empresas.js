import React from 'react'
import './empresasstyles.css'
import { Link } from 'react-router-dom'

const empresas = () => {
    return (
     
        
        <section class="page-contain">
         <span className='page-text'>SAIBA MAIS SOBRE <br/>NOSSAS EMPRESAS</span>
         <Link to="/harmonizepay" class="data-card">
          <h3>logo</h3>
          <h4>Harmonizepay</h4>
          </Link> 
       
          <Link to="/infoprojects" class="data-card">
          <h3>logo</h3>
          <h4>Infoprojects</h4>
       </Link>
      </section>
  




    )
}

export default empresas