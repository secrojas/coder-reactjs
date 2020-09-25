import React, {useContext} from "react";
import { Col, Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Item.scss";
import { Button } from "react-bootstrap";

import { CartContext } from '../../context/cartContext';

function Item({producto}){

  const { name,salePrice,image,sku} = producto;

  const {addProductCart}  = useContext(CartContext);
  
  return(

    <Col xs={12} md={3} className="item">
      <Card>
        <Card.Img variant="top" src={image} alt="producto" />
        <Card.Body>
          <Link to={{pathname: `/itemdetail/${sku}`, state: {test:'test'}}} style={{textDecoration:'none',color:'black'}}>
            <Card.Title style={{fontSize:'16px'}}>{name}</Card.Title>          
          </Link>          
          <Card.Text>$ {salePrice.toFixed(2)} </Card.Text>
          {/* <ItemCount
            min={1}
            max={10}
            initial={1}            
            producto={producto}
            products={products}
            carrito={carrito}
            agregarProducto={agregarProducto}
            addProductCart={addProductCart}
          /> */}
          <div>
            <Button
              type="button"
              onClick={() => addProductCart(producto.sku,producto.name,1)}                
            >
              Agregar
            </Button>
          </div>

        </Card.Body>
      </Card>
    </Col> 
  );
}

export default Item;
