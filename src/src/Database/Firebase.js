import firebase from "firebase";

/*const firebaseConfig = {
  apiKey: "AIzaSyCPlDAs8WPCPoZmpBjFIbjPhgis87C279Y",
  authDomain: "rebook-67249.firebaseapp.com",
  projectId: "rebook-67249",
  storageBucket: "rebook-67249.appspot.com",
  messagingSenderId: "1027559659854",
  appId: "1:1027559659854:web:b0e6f37c3e8d78d10be61f"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyAYwQ_WwdiVTwiWi9Cqd5JlKlE_flH0-4Q",
  authDomain: "book-6ab53.firebaseapp.com",
  projectId: "book-6ab53",
  storageBucket: "book-6ab53.appspot.com",
  messagingSenderId: "934033599311",
  appId: "1:934033599311:web:933139e1c301d1ae48f33a"
};
firebase.initializeApp(firebaseConfig);

export const storage =firebase.storage()
export const database = firebase.firestore()

export default firebase;