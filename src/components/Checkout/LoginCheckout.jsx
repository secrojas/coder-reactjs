import React, { Component } from 'react';
import CheckoutStep from "./CheckoutStep"
import * as firebase from 'firebase/app';
import {getFirebase} from '../../utils/firebase';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';


import { Button } from "react-bootstrap";
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
                    <div style={{width:'200px',margin:'0 auto'}}>
                      <p style={{textAlign:'center'}}>
                        <Button variant="danger" style={{marginLeft:'10px',color:'white',fontFamily:'Barlow',textTransform:'capitalize'}} onClick={signOut}>Cerrar Sesión</Button>
                      </p>                      
                    </div>
                    
                  </>                  
                : <> 
                    <div style={{width:'200px',margin:'0 auto'}}>
                      <p style={{textAlign:'center'}}>
                        <Button  style={{backgroundColor:'black',marginTop:'20px',marginLeft:'10px',color:'white',fontFamily:'Barlow',textTransform:'capitalize'}} onClick={signInWithGoogle}>
                          LOGIN <Google style={{marginLeft:'3px',width:'20px'}}/>
                        </Button>
                      </p>                      
                    </div>
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