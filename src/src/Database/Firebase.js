import firebase from 'firebase';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAYwQ_WwdiVTwiWi9Cqd5JlKlE_flH0-4Q",
  authDomain: "book-6ab53.firebaseapp.com",
  projectId: "book-6ab53",
  storageBucket: "book-6ab53.appspot.com",
  messagingSenderId: "934033599311",
  appId: "1:934033599311:web:933139e1c301d1ae48f33a"
};

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()
export const database = firebase.firestore()

export default firebase;