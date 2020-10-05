import React, {useContext} from "react";
import { Col, Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Item.scss";
import { Button } from "react-bootstrap";
import { BASE_PATH } from "../../utils/constants";

import { CartContext } from '../../context/cartContext';

function Item({producto}){

  const { title,price,image,id} = producto;

  const {addProductCart}  = useContext(CartContext);
  
  return(

    <Col xs={12} md={3} className="item">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${image}`} alt={`ticket ${title}`} />
        <Card.Body>
          <Link to={{pathname: `/itemdetail/${id}`, state: {test:'test'}}} style={{textDecoration:'none',color:'black'}}>
            <Card.Title style={{fontSize:'16px'}}>{title}</Card.Title>          
          </Link>          
          <Card.Text>$ {price} </Card.Text>
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
              onClick={() => addProductCart(producto.id,producto.title,1)}                
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
