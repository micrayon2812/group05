import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPlDAs8WPCPoZmpBjFIbjPhgis87C279Y",
    authDomain: "rebook-67249.firebaseapp.com",
    projectId: "rebook-67249",
    storageBucket: "rebook-67249.appspot.com",
    messagingSenderId: "1027559659854",
    appId: "1:1027559659854:web:b0e6f37c3e8d78d10be61f"
};

firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();