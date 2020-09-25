import React from "react";
import Item from './Item/Item';
import Loading from "../components/Loading";
import { Container, Row } from "react-bootstrap";


function ItemList(props){ 

  const {
    products: { result, loading, error }
  } = props;
 
  return(
    
    <Container>
      <Row>
      { loading || !result      
      ? (<Loading />)
      : result.products.map((producto,index) => (     
          <Item
            key={producto.sku}
            producto={producto}
            products={result.products}
          />          
        ))
      }
     </Row>
    </Container>

  );
}

export default ItemList;
