import React  from "react";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

export default function CartContentFooter(props) {
    const { cartTotalPrice } = props;
  
    return (
      <div className="cart-content__footer">
        <div>
          <p>Total a abonar: </p>
          <p>$ {cartTotalPrice.toFixed(2)}</p>
        </div>
        <Link to="/checkout" style={{textDecoration:'none',color:'black'}}>
          <Button>Checkout</Button>
        </Link>
      </div>
    );
  }