import firebase from "../../../../tree/node_modules/firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCPlDAs8WPCPoZmpBjFIbjPhgis87C279Y",
    authDomain: "rebook-67249.firebaseapp.com",
    projectId: "rebook-67249",
    storageBucket: "rebook-67249.appspot.com",
    messagingSenderId: "1027559659854",
    appId: "1:1027559659854:web:b0e6f37c3e8d78d10be61f"
  };
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const database= firebase.firestore();
export default firebase;