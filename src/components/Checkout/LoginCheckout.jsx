import React, { Component } from 'react';
import CheckoutStep from "./CheckoutStep"
import * as firebase from 'firebase/app';
import {getFirebase} from '../../utils/firebase';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';

import { Container, Row, Col,  Button } from "react-bootstrap";
import { ReactComponent as Google } from "../../assets/images/google.svg";

const firebaseApp = getFirebase(); 

class LoginCheckout extends Component {  
    
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
        products
      } = this.props;
      
      return (
        <div>
            {
              user
                ? <>
                    <p style={{color:'black',fontFamily:'Barlow'}}>Nombre: {user.displayName}</p>
                    <p style={{color:'black',fontFamily:'Barlow'}}>Correo: {user.email}</p>

                    <Container>
                      <Row>
                        <Col md={4} className="item"></Col>
                        <Col md={4} className="item">                        
                          <div className="center">
                             <Button variant="danger" style={{maxWidth:'none',margin:'0 auto',color:'white',fontFamily:'Barlow',textTransform:'capitalize'}} onClick={signOut}>Cerrar Sesión</Button>                           
                          </div>
                        </Col>
                      </Row>
                    </Container>                    
                  </>                  
                : <>                     
                    <Container>
                      <Row>
                        <Col md={4} className="item"></Col>
                        <Col md={4} className="item">                        
                          <div className="center">
                          <Button  style={{backgroundColor:'black',margin:'0 auto',color:'white',fontFamily:'Barlow',textTransform:'capitalize'}} onClick={signInWithGoogle}>
                            LOGIN <Google style={{marginLeft:'3px',width:'20px'}}/>
                          </Button>
                          </div>
                        </Col>
                      </Row>
                    </Container> 
                  </>
            }  
            
            {
              user
                ? <CheckoutStep 
                    products={products}
                    email={user.email}
                    nombre={user.displayName}
                  />
                : <p></p>
            }

            

        </div>
      );
    }
  }

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(LoginCheckout);