import React from "react"
import "./EditProfile.css";
import {Route, Link} from "react-router-dom";
import "./index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { render } from "@testing-library/react";

const firebaseConfig = {
    apiKey: "AIzaSyBrwCV5VZMrYP53rUd0RLpLpxUqQSPY6jE",
    authDomain: "rebook-4261f.firebaseapp.com",
    projectId: "rebook-4261f",
    storageBucket: "rebook-4261f.appspot.com",
    messagingSenderId: "302684411026",
    appId: "1:302684411026:web:be876d0ac01f1b51bd424b",
    measurementId: "G-WD7MNZX6ZJ"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

function Edit(){
        const [userId, setId] = React.useState("");
        const [userName, setName] = React.useState("");
        const [email, setEmail] = React.useState("");
        const [phoneNum, setPhone] = React.useState("");
        const [professions, setProfessions] = React.useState("");

        const db = firebase.firestore();

        const getUserId= (event) => {
            setId(event.target.userId);  
        };
        const getUserName= (event) => {
            setName(event.target.userName);  
        };
        const getEmail= (event) => {
            setEmail(event.target.email);  
        };
        const getPhoneNum= (event) => {
            setPhone(event.target.phoneNum);  
        };
        const getProfessions= (event) => {
            setProfessions(event.target.professions);  
        };
      
        function updateBtn(e){
            e.preventDefault();
            db.collection('users').doc('01').set({
                Name: 'userName',
                Mail: 'email',
                Phone: 'phoneNum',
                Professions: 'professions'
            })
            .then( () => {console.log("Successfully written!");})
            .catch( (error) => {console.error("Error", error);})
            return e.preventDefault();
        };
    
    /*function updateBtn( (e) => {
        e.preventDefault();
        usersCollection.doc(userId.value).set({
            userName:  userName.value,
            email: email.value,
            phoneNum: phoneNum.value,
            professions: professions.value
        })
        .then( () => {console.log('Update profile successfully');})
        .catch(error => {console.log(error);})
        return e.preventDefault();
    }[userName.value,email.value,phoneNum.value,professions.value];
*/
    render()
    return (
        <div class="container emp-profile">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-work">
                        <p>WORK LINK</p>
                        <a href="">Website Link</a><br/>
                        <a href="">Bootsnipp Profile</a><br/>
                        <a href="">Bootply Profile</a>
                        <p>SKILLS</p>
                        <a href="">Web Designer</a><br/>
                        <a href="">Web Developer</a><br/>
                        <a href="">WordPress</a><br/>
                        <a href="">WooCommerce</a><br/>
                        <a href="">PHP, .Net</a><br/>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="userId">User Id</label>
                                            <input onBlur={getUserId} type="text" placeholder="Enter your user ID" />
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6"> 
                                            <label for="userName">User Name</label>
                                            <input onBlur={getUserName} type="text" placeholder="Enter your name" />       
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6"> 
                                            <label for="email">Email</label>
                                            <input onBlur={getEmail} type="text" placeholder="Enter your email" />       
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="phoneNum">Phone</label>
                                            <input onBlur={getPhoneNum} type="text" placeholder="Enter your phone number" />
                                            </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="professions">Profession</label>
                                            <input onBlur={getProfessions} type="text" placeholder="Enter your profession" />
                                        </div>
                                    </div>

                                    <div class="row-md-2">
                                        <button type="button" class="updateBtn" onClick={updateBtn}>Update Profile</button>   
                                    </div>
                        </div>
                    </div>
                </div>
            </div>           
    </div>
    );
    
}

export default Edit
