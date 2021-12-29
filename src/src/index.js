import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBrwCV5VZMrYP53rUd0RLpLpxUqQSPY6jE",
  authDomain: "rebook-4261f.firebaseapp.com",
  projectId: "rebook-4261f",
  storageBucket: "rebook-4261f.appspot.com",
  messagingSenderId: "302684411026",
  appId: "1:302684411026:web:be876d0ac01f1b51bd424b",
  measurementId: "G-WD7MNZX6ZJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


reportWebVitals();
