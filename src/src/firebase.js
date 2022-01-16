import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAYwQ_WwdiVTwiWi9Cqd5JlKlE_flH0-4Q",
    authDomain: "book-6ab53.firebaseapp.com",
    projectId: "book-6ab53",
    storageBucket: "book-6ab53.appspot.com",
    messagingSenderId: "934033599311",
    appId: "1:934033599311:web:933139e1c301d1ae48f33a"
})

export const auth = app.auth()
export default app