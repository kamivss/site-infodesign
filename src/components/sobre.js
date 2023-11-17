import React from 'react'
import './sobrestyles.css'
import imagem from '../images/sobre.svg'
const sobre = () => {
    return (
        <div className='sobre'>
            <div>
                <img src={imagem} className='imagem' />
            </div>
            <div className='text'>
                <h1>CRIAMOS SOLUÇÕES PARA SUA<br />
                    EMPRESA ATENDENDO DIVERSAS<br />
                    NECESSIDADES  </h1>
                <p className='p1'>A Infodesign destaca-se como líder em nosso Grupo de Empresas,<br />consolidando-se
                    como a principal referência em três áreas distintas <br />de atuação: Sistemas Prontos,
                    Projetos Personalizados e <br />Conciliação Financeira.</p>

                <p className='p2'>
                    Na Infodesign, nosso compromisso é exemplificado pela dedicação<br />
                    à oferta de sistemas prontos,um domínio no qual fornecemos suporte <br />
                    integral e consultoria especializada aos nossos estimados parceiros.
                </p>
            </div>
        </div>
    )
}

export default sobre