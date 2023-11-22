import React from 'react'
import './nossosservicosstyles.css'
import { Link } from 'react-router-dom'

function nossosservicos() {
    return (
        <div class="ag-format-container">
            <h1 className='ag-text'>Nossos serviços</h1>
            <div class="ag-courses_box">
                <div class="ag-courses_item">
                <Link to="/infointegrador" class="ag-courses-item_link">
                    
                        
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                            INFO-INTEGRADOR
                        </div>

                        <div class="ag-courses-item_date-box">

                            <span class="ag-courses-item_date">
                                Facilitamos a integração entre sua empresa e fornecedor oferecendo ferramentas e suporte estratégico aliado à tecnologia.
                            </span>
                        </div>
                 
                    </Link>
                </div>

                <div class="ag-courses_item">
                    <Link to="/erp" class="ag-courses-item_link">
                    
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                            ERP
                        </div>

                        <div class="ag-courses-item_date-box">

                            <span class="ag-courses-item_date">
                                Sistema integrado que gerencia recursos da sua empresa otimizando processos e melhorando eficiência operacional.</span>
                        </div>
                        </Link>
                </div>

                <div class="ag-courses_item">
                <Link to="/infowms" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                            INFO-WMS
                        </div>

                        <div class="ag-courses-item_date-box">

                            <span class="ag-courses-item_date">
                                Facilita a gestão de estoque controlando entrada saída e armazenamento de mercadorias  reduzindo custos operacionais.
                            </span>
                        </div>
                    </Link>
                </div>
                <div class="ag-courses_item">
                <Link to="/infoemissor" class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>

                        <div class="ag-courses-item_title">
                            INFO-EMISSOR
                        </div>

                        <div class="ag-courses-item_date-box">

                            <span class="ag-courses-item_date">
                                Um sistema completo para emissão de notas fiscais de maneira simplificada e acessivel.

                            </span>
                        </div>
                    </Link>
                </div>
               </div>
        </div>
    )
}

export default nossosservicos