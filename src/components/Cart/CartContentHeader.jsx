import React  from "react";
import { Button } from "react-bootstrap";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import { ReactComponent as Garbage } from "../../assets/images/garbage.svg";

export default function CartContentHeader(props) {
    const { closeCart, emptyCart } = props;
  
    return (
      <div className="cart-content__header">
        <div>
          <Close onClick={closeCart} />
          <h2>Carrito</h2>
        </div>
  
        <Button variant="link" onClick={emptyCart}>
          Vaciar
          <Garbage />
        </Button>
      </div>
    );
}