import React from "react";
import { FaBars } from "react-icons/fa";
import "./navbarstyles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="header">
                <Link to="/">
                    infodesign
                </Link>
                <div>
                    <ul className="nav-menu">

                        <li className="nav-item"><Link to="/Ainfodesign" class="nav-link" href="#"> A infodesign </Link></li>
                        <li className="nav-item"><Link to="/serviços" class="nav-link" href="#"> Serviços </Link></li>
                        <li className="nav-item"><Link to="/empresas" class="nav-link" href="#"> Empresas </Link></li>
                        <li className="nav-item"><Link to="/trabalheconosco" class="nav-link" href="#"> Trabalhe conosco </Link></li>
                        <li className="nav-button"><Link to="/controledeacesso" class="nav-link" href="#"><button className="btn-light">Controle de acesso</button></Link></li>

                    </ul>
                    <div className="nav-responsive">
                        <FaBars size={20} style={{ color: "#000" }} />
                    </div>
                </div>
            </div>
        </nav>
    )



}
export default Navbar;
