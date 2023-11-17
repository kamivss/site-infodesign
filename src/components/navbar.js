import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbarstyles.css";
import { Link } from "react-router-dom";
import logo from "../images/Logoinfodesign.svg"

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav >

            <div>

                <div className="logo">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="header">
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item"><Link to="/Ainfodesign" class="nav-link" href="#"> A infodesign </Link></li>
                        <li className="nav-item"><Link to="/serviços" class="nav-link" href="#"> Serviços </Link></li>
                        <li className="nav-item"><Link to="/empresas" class="nav-link" href="#"> Empresas </Link></li>
                        <li className="nav-item"><Link to="/trabalheconosco" class="nav-link" href="#"> Trabalhe conosco </Link></li>
                        <li ><Link to="/controledeacesso" class="nav-link" href="#"><button className="btn-light">Controle de acesso</button></Link></li>

                    </ul>
                    <div className="nav-responsive" onClick={handleClick}>
                        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (<FaBars size={20} style={{ color: "#000" }} />)}
                    </div>
                </div>
            </div>
        </nav>
    )



}
export default Navbar;
