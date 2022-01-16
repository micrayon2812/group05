import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAJZdIVDHbtCEvXdPtJYchbIXo0o5PNGsw",
    authDomain: "rebook-d644c.firebaseapp.com",
    projectId: "rebook-d644c",
    storageBucket: "rebook-d644c.appspot.com",
    messagingSenderId: "762929478324",
    appId: "1:762929478324:web:52ce662ca1546545aa35e1",
    measurementId: "G-WXJ69JTNYE"
})

export const auth = app.auth()
export default app