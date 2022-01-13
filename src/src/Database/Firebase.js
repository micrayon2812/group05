// import firebase from "../../../../tree/node_modules/firebase";
// import storage from "firebase/storage";
// import firestore from "firebase/firebase-firestore"
import firebase from "firebase/compat";
import "firebase/compat/firestore";
import "firebase/compat/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCPlDAs8WPCPoZmpBjFIbjPhgis87C279Y",
    authDomain: "rebook-67249.firebaseapp.com",
    projectId: "rebook-67249",
    storageBucket: "rebook-67249.appspot.com",
    messagingSenderId: "1027559659854",
    appId: "1:1027559659854:web:b0e6f37c3e8d78d10be61f"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
// export const storages = firebaseConfig.firestore;
// export const database= firebase.firestore();
export const storage =firebase.storage()
export const database = firebase.firestore()

export default firebase;