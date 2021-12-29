import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "./img/logo_200x200.png";
import { VscAccount } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';


function Navbar() {
    const icon = { color: "white", fontSize: "1.5em" }
    
    return (
        <div class="container-fluid1 px-0 ">
        <nav class="navbar navbar-expand-md navbar-light bg-darkblue p-0" > 
            <div class="collapse navbar-collapse" id="navbarNav" >
                <ul class="navbar-nav">
                <li class="nav-item" > 
                      <a class="nav-link " href="/Home" >Home</a>
                    </li>
                    <li class="nav-item"> 
                      <a class="nav-link " href="/Aboutus" >About Us</a>
                    {/* <a class="nav-link " href="/Aboutus" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us<span class="fa fa-angle-down"></span></a> */}
                        {/* <div class="dropdown-menu" id="dropdown-menu2" aria-labelledby="navbarDropdown2">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-folder"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">WhitePaper</h6> <small class="text-light">Marketing and report</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">FAQs</h6> <small class="text-light">Qs and answers</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-calculator"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Tools</h6> <small class="text-light">All tools</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-paper-plane"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Success Stories</h6> <small class="text-light">Experiences</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </li>
                    <li class="nav-item"> <a class="nav-link" href="/Category" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-music"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0"> Arts &amp; Music</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-pencil  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Biographies</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div> <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-gamepad"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Comics</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-desktop  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Computers 	&amp; Tech</h6><small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-apple  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Cooking</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-book  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Edu &amp; Reference</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-camera-retro "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Entertainment</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-genderless  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Gay &amp; Lesbian</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-medkit  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Health</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-snapchat-ghost"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Horror</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-smile-o"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Kids</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-bookmark  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Literature &amp; Fiction</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Mysteries</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-book  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Religion</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-heartbeat  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Romance</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-flask  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Sci-Fi &amp; Fantasy</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-balance-scale   "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Science &amp; Math</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-futbol-o "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Sports</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-gratipay  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Teenfic</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-cutlery  "></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">True Crime</h6>  <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-comment"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Others</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li class="nav-item"> <a class="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community<span class="fa fa-angle-down"></span></a>
                        <div class="dropdown-menu" id="dropdown-menu3" aria-labelledby="navbarDropdown3">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-feed"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">Feedback</h6> <small class="text-light">Opinions, complaints</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 ">
                                        <div class="row d-flex tab">
                                            <div class="fa-icon text-center"> <span class="fa fa-question"></span> </div>
                                            <div class="d-flex flex-column"> <a class="dropdown-item" href="#">
                                                    <h6 class="mb-0">FAQs</h6> <small class="text-light">Qs and answers</small>
                                                </a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> */}

                    
                    <li class="nav-item"> 
                      <a class="nav-link " href="/Record" >Publish</a>
                    </li>
                    <li class="nav-item"> 
                      <a class="nav-link " href="/TreeStore" >Tree Store</a>
                    </li>
                </ul>
               <div class="dropdown" >
                   <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                           aria-expanded="false" >
                                    <IconContext.Provider value={{ color: "Black"}}>  <a class=" mx-1 acc"  href="/Account"  ><VscAccount  value={{ color: "blue" }} size="30px" /></a></IconContext.Provider>  
                           </button>
                   <div class="dropdown-menu" aria-labelledby="triggerId">
                       <a class="dropdown-item" href="/Profile">Profile</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="/MyBook">My book</a>
                       <div class="dropdown-divider"></div>
                       <a class="dropdown-item" href="/">Log out</a>
                       <div class="dropdown-divider"></div>
                   </div>
               </div>
       
                   
                    
               
            </div>
        </nav>
    </div>
    )
}

export default Navbar
