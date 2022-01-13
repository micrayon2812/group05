import React from 'react'
import "./Profile.css";

import {Link} from "react-router-dom";
import { auth } from '../firebase';
import {database} from "../Database/Firebase"
import { useState } from 'react';

function ProfileEdit() {
    const [info , setInfo] = useState([]);

    const user = auth.currentUser;
    GetInfo(user.email);
    
    function GetInfo (usermail){
    database.collection("User").get().then((querySnapshot) => {
        querySnapshot.forEach(element => {
            var data = element.data();
            if (data.email == usermail){
                setInfo(data);
            }
              
        });  
    })
}
    function UpdateInfo (usermail){
        database.collection("User").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                if (data.email == usermail){
                    setInfo(data);
                }
                  
            });  
        })
 
    }
    return (
         
        <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={info.avatar} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        {info.name}
                                    </h5>
                                    <h6>
                                        User
                                    </h6>
                                    <p class="proile-rating">Plant Level : <span>100%</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item Acc">
                                    <a class="nav-link active" id="home-tab" href="/Profile-About" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                <li class="nav-item Acc">
                                    <a class="nav-link" id="profile-tab"  href="/Profile-Planting" role="tab" aria-controls="trees" aria-selected="false">Planting</a>
                                </li>
                                <li class="nav-item Acc">
                                    <a class="nav-link" id="library-tab" href="/Profile-Library" role="tab" aria-controls="library" aria-selected="false">Library</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <Link to="/ProfileAbout" id="profile-edit-btn">Profile</Link>
                    </div>
                </div>
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
           
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" id="name_input" name="name_input"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Age</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" id="age_input" name="age_input"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{info.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" id="phone_input" name="phone_input"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                            <input type="text" id="Profession_input" name="Profession_input"/>    
                                            </div>
                                        </div>
                            </div>
                   
                    
                        </div>
    
            </form>           
        </div>
    )
}

export default ProfileEdit
