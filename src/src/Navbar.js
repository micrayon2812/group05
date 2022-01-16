import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./img/logo_200x200.png";
import { VscAccount } from "react-icons/vsc";
import { BsBook } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import {useAuth} from "./contexts/AuthContext";
import { useHistory } from "react-router-dom"


function Navbar() {
    const icon = { color: "white", fontSize: "1.5em" }

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()


    async function handleLogout() {
        setError("")
    
        try {
          await logout()
          //history.push("/Login")
        } catch {
          setError("Failed to log out")
        }
      }

    return (
        <div class="container-fluid1 px-0 ">
            <nav class="navbar navbar-expand-md navbar-light bg-darkblue p-0" >
                <div class="collapse navbar-collapse" id="navbarNav" >
                    <div class="navbar-nav">
                        <div class="nav-item" >
                            <a href="/Home" >Home</a>
                        </div>
                        <div class="nav-item">
                            <a href="/Aboutus" >About Us</a>

                        </div>
                        <div class="nav-item"> <a id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category<span class="fa fa-angle-down"></span></a>

                            <div class="dropdown-menu" id="dropdown-menu1" aria-labelledby="navbarDropdown1">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-music"></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-ArtsMusic">

                                                    <h6 class="mb-0"> Arts &amp; Music</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-pencil  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Biographies">

                                                    <h6 class="mb-0">Biographies</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div> <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-gamepad"></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Comics">

                                                    <h6 class="mb-0">Comics</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-desktop  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-ComputersvsTech">

                                                    <h6 class="mb-0">Computers 	&amp; Tech</h6><small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-apple  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Cooking">

                                                    <h6 class="mb-0">Cooking</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-book  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-EduReference">

                                                    <h6 class="mb-0">Edu &amp; Reference</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-camera-retro "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Entertainment">

                                                    <h6 class="mb-0">Entertainment</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-genderless  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-GayLesbian">

                                                    <h6 class="mb-0">Gay &amp; Lesbian</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-medkit  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Health">

                                                    <h6 class="mb-0">Health</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-snapchat-ghost"></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Horror">

                                                    <h6 class="mb-0">Horror</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-smile-o"></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Kids">

                                                    <h6 class="mb-0">Kids</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-bookmark  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-LiteratureFiction">

                                                    <h6 class="mb-0">Literature &amp; Fiction</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-question  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Mysteries">

                                                    <h6 class="mb-0">Mysteries</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-book  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Religion">

                                                    <h6 class="mb-0">Religion</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-heartbeat  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Romance">

                                                    <h6 class="mb-0">Romance</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-flask  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Sci-FiFantasy">

                                                    <h6 class="mb-0">Sci-Fi &amp; Fantasy</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-balance-scale   "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-ScienceMath">

                                                    <h6 class="mb-0">Science &amp; Math</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-futbol-o "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category-Sports">

                                                    <h6 class="mb-0">Sports</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-gratipay  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category/Teenfic">

                                                    <h6 class="mb-0">Teenfic</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-cutlery  "></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category/TrueCrime">

                                                    <h6 class="mb-0">True Crime</h6>  <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="row d-flex tab">
                                                <div class="fa-icon text-center"> <span class="fa fa-comment"></span> </div>

                                                <div class="d-flex flex-column"> <a class="dropdown-item" href="/Category/Others">

                                                    <h6 class="mb-0">Others</h6> <small class="text-light">Click here for more</small>
                                                </a> </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="nav-item">
                            <a href="/Record" >Publish</a>
                        </div>
                        <div class="nav-item">
                            <a href="/TreeStore" >Tree Store</a>
                        </div>
                    </div>
                    <div class="dropdown" >
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false" >
                            <IconContext.Provider value={{ color: "Black" }}>  <a class=" mx-1 acc" href="/Account"  ><VscAccount value={{ color: "blue" }} size="30px" /></a></IconContext.Provider>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="triggerId">

                            <a class="dropdown-item" href="/ProfileAbout">Profile</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/MyBook">My book</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" onClick={handleLogout} href="/">Log out</a>
                            <div class="dropdown-divider"></div>
                        </div>
                    </div>




                </div>
            </nav>
        </div>
    )
}

export default Navbar
