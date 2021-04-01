import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD01N1Qm7GLw57SAoovptV62BBrkaouJAo",
    authDomain: "react-journal-app-507f3.firebaseapp.com",
    projectId: "react-journal-app-507f3",
    storageBucket: "react-journal-app-507f3.appspot.com",
    messagingSenderId: "440652090523",
    appId: "1:440652090523:web:b12e37350f1300536b8a3e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}