import React from 'react'
import Navbar from '../components/navbar'
import Infointegradorlp from '../components/infointegrador-landingpage'
import Infointegradorvantagens from '../components/infointegrador-vantagens'
import Infointegardorimagem from '../components/infointegrador-imagem'
import Infointegradorcomentarios from '../components/infointegrador-comentarios'
import Footer from '../components/footer'

const infointegardor = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Infointegradorlp></Infointegradorlp>
            <Infointegradorvantagens></Infointegradorvantagens>
            <Infointegardorimagem></Infointegardorimagem>
            <Infointegradorcomentarios></Infointegradorcomentarios>
            <Footer></Footer>
        </div>
    )
}

export default infointegardor