import React, { useState } from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import ItemCount from '../ItemCount';

function ItemDetail(props){

    const {initial, name, salePrice, image, shortDescription} = props;     

    const [contador, setContador] = useState(initial);  

    function cuenta(c){
        setContador(c)
        console.log('c => ', c, 'count => ', contador);
    }    

    return(
        <div>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                
              </Col>
              <Col md="auto">
                <Card className="text-center">
                  <Card.Header as="h5">{name}</Card.Header>
                  <Card.Body>
                    <Card.Img variant="top" src={image} alt="producto" style={{width:'200px'}} />
                    <Card.Title>$ {salePrice.toFixed(2)}</Card.Title>
                    <Card.Text>
                      {shortDescription}
                    </Card.Text>
                      
                    <ItemCount 
                      cuenta={cuenta}
                      min={1}
                      max={10}
                      initial={1}
                    />

                  </Card.Body>
                </Card>
              </Col>
              <Col xs lg="2"></Col>
            </Row>            
          </Container>

          <div className="clearfix"></div>

        </div>
    )
}


export default ItemDetail;