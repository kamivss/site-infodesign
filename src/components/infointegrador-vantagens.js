import React from 'react'
import './infointegrador-vantagensstyles.css'
import { IoCheckmarkCircle } from "react-icons/io5";
const vantagens = () => {
  return (
    <><div className="text-section">
          <h2>Vantagens de um hub de integração</h2>
      </div><div className="icon-columns">
              <div className="column-1">
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Maior alcance de mercado e visibilidade</p>
                  </div>
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Economia de recursos</p>
                  </div>
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Gestão mais ágil sem perder eficiência</p>
                  </div>
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Maior controle de estoque e financeiro</p>
                  </div>
              </div>
              <div className="column-2">
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Análise de dados de desempenho</p>
                  </div>
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Redução de erros</p>
                  </div>
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Atendimento ao cliente aprimorado</p>
                  </div>
                  <div className="icon-text">
                  <IoCheckmarkCircle />
                      <p>Suporte personalizado para diferentes situações</p>
                  </div>
              </div>
          </div></>
  )
}

export default vantagens