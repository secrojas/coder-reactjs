import React, {Component} from 'react';
import {Nav} from "react-bootstrap";

class CartIcon extends Component{

    render(){
        return(                       
            <Nav.Link href="/cart">Carrito <i className="fas fa-shopping-basket"></i></Nav.Link>
        );
    }
}

export default CartIcon;