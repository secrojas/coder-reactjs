import React, {Component} from 'react';

class CartIcon extends Component{

    render(){
        return(
            
            <li>
                <a href="#">Cart <i className="fas fa-shopping-basket"></i></a>
                <ul>
                    <li>Actualmente vacío!</li>                   
                </ul> 
            </li>

        );
    }

}

export default CartIcon;