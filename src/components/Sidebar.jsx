import React, {Component} from 'react';
import { Container,Row,Col,Image} from "react-bootstrap";

class Sidebar extends Component{

    render(){
        return(
            <>
                <h3 style={{
                textAlign: 'center',
                marginTop: '50px',
                fontFamily:'Barlow',
                }}>
                NOVEDARES
                </h3>

                <p style={{textAlign:'center',fontFamily:'Barlow',marginTop:'20px'}}>Accede a nuestras plataformas de videos para tener acceso a todos nuestros videos.</p>
                <Container>
                <Row>
                    <Col>
                    <a href="https://web.credihub.net" target="_blank">
                        <Image src="../images/credihub.jpg" thumbnail fluid />
                    </a>              
                    </Col>            
                </Row>
                <Row>
                    <Col>
                    <a href="https://web.insurhub.net" target="_blank">
                        <Image src="../images/insurhub.png" thumbnail fluid />
                    </a>
                    </Col>            
                </Row>
                <Row>
                    <Col>
                    <a href="https://cms365.app" target="_blank">
                        <Image src="../images/365-big.png" thumbnail fluid />
                    </a>
                    </Col>            
                </Row>
                </Container>
            </>
        );
    }
}

export default Sidebar;