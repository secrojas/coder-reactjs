import React, { useState } from 'react';
import {Container, Row, Col, Card, Button} from "react-bootstrap";

function ItemDetail(props){

    const { max, min, initial, name, salePrice, image} = props; 

    const [contador, setContador] = useState(initial);  

  const incrementar = () => {
    if (contador < max) {
      setContador((prevCounter) => {
        return prevCounter + 1;
      });
    } else {
      console.log("Máximo permitido!");
    }
  };

  const disminuir = () => {
    if (contador > min) {
      setContador((prevCounter) => {
        return prevCounter - 1;
      });
    } else {
      console.log("Mínimo permitido!");
    }
  };

    function giveMeCount(c){
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
                      Descripción del producto. Sin definir aún. En trabajo.
                    </Card.Text>
                    <button onClick={disminuir} className="btnMenos">
                      {" "}
                      -{" "}
                    </button>
                    <span style={{ color: "red", fontSize: "20px" }}> {contador} </span>
                    <button onClick={incrementar} className="btnMas">
                      {" "}
                      +{" "}
                    </button>

                    <div>
                      <Button                
                        className="btnComprar"
                        type="button"                                        
                      >
                        Agregar:
                      </Button>
                    </div>                    
                  </Card.Body>
                </Card>
              </Col>
              <Col xs lg="2">
                
              </Col>
            </Row>            
          </Container>

          

          <div className="clearfix"></div>
        </div>
    )
}


export default ItemDetail;