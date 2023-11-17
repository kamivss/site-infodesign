import React from 'react'
import Navbar from '../components/navbar';
import Landingpage from '../components/landingpage'
import Sobre from '../components/sobre'
import Serviços from '../components/nossosservicos'
import Empresas from '../components/empresas'
import Clientes from '../components/clientes'
const home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Landingpage></Landingpage>
            <Sobre></Sobre>
            <Serviços></Serviços>
            <Empresas></Empresas>
            <Clientes></Clientes>


        </div>
    )
}

export default home;