import "./landingpagestyles.css";

import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

const landingpage = () => {


    return (
        <div className="container">
            <div className="frase">
                <h1 className="text1">JUNTE-SE A NÓS E CONSTRUA </h1>
                <h1 className="text2">UM FUTURO <span>INOVADOR</span> CONOSCO</h1>
            </div>
            <div className="feature-pai">
                <div className="feature">
                    <IoCheckmarkCircle />
                    <p>Confiável</p>
                </div>
                <div className="feature">
                    <IoCheckmarkCircle />
                    <p>Criativo</p>
                </div>
                <div className="feature">
                    <IoCheckmarkCircle />
                    <p>Proativo</p>
                </div>
                <div className="feature">
                    <IoCheckmarkCircle />
                    <p>Ótimos resultados</p>
                </div>
            </div>
        </div>
    );
};

export default landingpage
