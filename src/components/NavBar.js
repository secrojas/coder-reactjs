import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';

import CartIcon from '../components/CartIcon';

class NavBar extends Component{

    render(){
        return(
            
            <header id="header">
                <div className="center">
                   
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="secrojas | desarrollo web"/>
                        <span id="brand">
                            <strong>Coder</strong> tienda
                        </span>
                    </div>                    
                    
                    <nav id="menu">
                        <ul className="nav">                            
                            <li>
                                <a href="#">Catálogo</a>
                            </li>                            

                            <li>
                                <a href="#">Mi cuenta</a> 
                                <ul>
                                    <li><a href="">Perfil</a></li>
                                    <li><a href="">Pedidos</a></li>
                                </ul>                                    
                            </li>

                            <CartIcon />                       
                        </ul>
                    </nav>
                    
                    <div className="clearfix"></div>
                </div>
            </header>

        );
    }

}

export default NavBar;