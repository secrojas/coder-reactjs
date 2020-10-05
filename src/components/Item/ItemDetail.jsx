import React, { useState } from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import ItemCount from './ItemCount';
import { BASE_PATH } from "../../utils/constants";

function ItemDetail(props){

    const {initial, id, title, price, image, description} = props;

    return(
        <div>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                
              </Col>
              <Col md="auto">
                <Card className="text-center">
                  <Card.Header as="h5">{title}</Card.Header>
                  <Card.Body>
                    <Card.Img variant="top" src={`${BASE_PATH}/${image}`} alt={`ticket ${title}`} style={{width:'300px'}} />
                    <Card.Title>$ {price}</Card.Title>
                    <Card.Text>
                      {description}
                    </Card.Text>
                      
                    <ItemCount                       
                      min={0}
                      max={10}
                      initial={initial}
                      id={id}
                      title={title}
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