import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA7oNh1OvDKLlKckEJpFwswy2kg_aULyCg",
    authDomain: "secrojas-coder.firebaseapp.com",
    databaseURL: "https://secrojas-coder.firebaseio.com",
    projectId: "secrojas-coder",
    storageBucket: "secrojas-coder.appspot.com",
    messagingSenderId: "1026006815729",
    appId: "1:1026006815729:web:92bc2f7bb573fe86182a50",
    measurementId: "G-F2MNZYBRV0"
});

export function getFirebase()
{
    return app;    
}

export function getFirestone()
{
    return firebase.firestore(app);
}

