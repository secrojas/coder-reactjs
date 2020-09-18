import React, {Component} from 'react';
import logo from '../assets/images/logo.svg';
import CartIcon from '../components/CartIcon';
import {Link} from 'react-router-dom';


class NavBar extends Component{

    render(){
        return(
            
            <header id="header">
                <div className="center">
                   
                    <div id="logo">
                        <Link to={'/'}>
                            <img src={logo} className="app-logo" alt="secrojas | desarrollo web"/>
                            <span id="brand">
                                <strong>Coder</strong> tienda
                            </span>
                        </Link>
                    </div>                    
                    
                    <nav id="menu">
                        <ul className="nav">                            
                            <li>
                                <Link to={'/products'}>Catálogo</Link>
                            </li>

                            <li>
                                <Link to={'/cart'}>Carrito</Link>
                            </li>                            

                            <li>
                                <a>Mi cuenta</a> 
                                <ul>
                                    <li><Link to={'/profile'}>Perfil</Link></li>
                                    <li><Link to={'/orders'}>Pedidos</Link></li>
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