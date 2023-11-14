import { Component } from "react";
import "./navbarstyles.css";
import logo from "../images/logoinfodesign.svg";
class Navbar extends Component {
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }
    render() {
    return(
           <>
           
           <nav>
            <a href="index.html">
                <img src={logo} id="logo"/>
            </a>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><a href="index.html">A infodesign</a></li>
                    <li><a href="index.html">Serviços</a></li>
                    <li><a href="index.html">Empresas</a></li>
                    <li><a href="index.html">Trabalhe conosco</a></li>
                    <li><button type="button" class="custom-button">Controle de acesso</button></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                
                <i id="bar" className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                
                
            </div>
           </nav>
           
           </>
    )
 }

}
export default Navbar;