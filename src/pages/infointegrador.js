import React from 'react'
import Navbar from '../components/navbar'
import Infointegradorlp from '../components/infointegrador-landingpage'
import Infointegradorvantagens from '../components/infointegrador-vantagens'
import Infointegardorimagem from '../components/infointegrador-imagem'
const infointegardor = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Infointegradorlp></Infointegradorlp>
        <Infointegradorvantagens></Infointegradorvantagens>
        <Infointegardorimagem></Infointegardorimagem>
        </div>
    )
}

export default infointegardor