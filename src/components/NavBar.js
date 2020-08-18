import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.png';

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
                        <ul>                            
                            <li>
                                <a href="#">Catálogo</a>
                            </li>                                                                                   
                            <li>
                                <a href="#">Cart <i class="fas fa-shopping-basket"></i></a>  
                            </li>
                            <li>
                                <a href="#">Mi cuenta</a>  
                            </li>                       
                        </ul>
                    </nav>
                    
                    <div className="clearfix"></div>
                </div>
            </header>

        );
    }

}

export default NavBar;