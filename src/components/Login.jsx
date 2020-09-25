import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../utils/firebase';

import { Button } from "react-bootstrap";
import { ReactComponent as Google } from "../assets/images/google.svg";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      
      return (
        <div>
            {
              user
                ? <p style={{color:'white',fontFamily:'Barlow'}}>{user.displayName}</p>
                : <p></p>
            }
  
            {
              user
                ? <Button variant="outline-danger" style={{marginLeft:'10px',color:'white',fontFamily:'Barlow',textTransform:'capitalize'}} onClick={signOut}>Sign out</Button>
                : <Button variant="outline-primary" style={{marginTop:'-20px',marginLeft:'10px',color:'white',fontFamily:'Barlow',textTransform:'capitalize'}} onClick={signInWithGoogle}>
                    Login <Google style={{marginLeft:'3px',width:'20px'}}/>
                  </Button>
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
})(Login);