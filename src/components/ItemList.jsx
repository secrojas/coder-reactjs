import React from "react";
import Item from './Item/Item';
import Loading from "../components/Loading";
import { Container, Row } from "react-bootstrap";


function ItemList(props){ 

  return(
    
    <Container>
      <Row>
      { !props.products.length>0      
      ? (<Loading />)
      : props.products.map((producto,index) => (     
          <Item
            key={producto.id}
            producto={producto}
            products={props.products}
          />          
        ))
      }
     </Row>
    </Container>

  );
}

export default ItemList;
