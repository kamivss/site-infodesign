// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './navbarstyles.css'
import { Link } from "react-router-dom";
import logo from "../images/Logoinfodesign 1.svg";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const scrollToServices = () => {
    scroll.scrollTo("servicos", {
      smooth: true,
      duration: 500,
      offset: -100,
    });
    setClick(false);
  };

  return (
    <nav>
      <div>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <ScrollLink
                to="sobre"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={scrollToServices}
              >
               A Infodesign
              </ScrollLink>
              </li>
            <li className="nav-item">
              <ScrollLink
                to="servicos"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={scrollToServices}
              >
                Serviços
              </ScrollLink>
            </li>
            <li className="nav-item">
            <ScrollLink
                to="empresas"
                smooth={true}
                duration={500}
                className="nav-link"
                onClick={scrollToServices}
              >
                Empresas
              </ScrollLink>
            </li>
            <li className="nav-item">
              <Link to="/trabalheconosco" className="nav-link">
                Trabalhe conosco
              </Link>
            </li>
            <li>
              <Link to="/controledeacesso" className="nav-link">
                <button className="btn-light">Controle de acesso</button>
              </Link>
            </li>
          </ul>
          <div className="nav-responsive" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#000" }} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
