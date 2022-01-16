import React, {useRef, useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import {BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs";
import {useAuth} from "./contexts/AuthContext";
import {Alert} from "react-bootstrap"

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/Home")
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
    }

    return (
    <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
            <div class="row d-flex">
                <div class="col-lg-6">
                    <div class="card1 pb-5">
                        <div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo" /> </div>
                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" class="image" /> </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card2 card border-0 px-4 py-5">
                        <div class="row mb-4 px-3">
                            <h6 class="mb-0 mr-4 mt-2">Sign up with</h6>
                            <div class="facebook text-center mr-3">
                                <BsFacebook />
                            </div>
                            <div class="twitter text-center mr-3">
                                <BsTwitter />
                            </div>
                            <div class="linkedin text-center mr-3">
                                <BsLinkedin />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div class="row px-3 mb-4">
                                <div class="line"></div> <small class="or text-center">Or</small>
                                <div class="line"></div>
                            </div>
                            <div class="form-group px-3" id="email"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Email Address</h6>
                                </label> <input class="form-control mb-4" type="text" ref={emailRef} name="email" placeholder="Enter a valid email address" required/> </div>
                            <div class="form-group px-3" id="password"> <label class="mb-1">
                                    <h6 class="mb-0 text-sm">Password</h6>
                                </label> <input class="form-control mb-4" type="password" ref={passwordRef} name="password" placeholder="Enter password" required/> </div>
                            <div class="row px-3 mb-4">
                                <div class="form-check custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input" /> <label for="chk1" class="form-check-label custom-control-label text-sm">Remember me</label> </div> 
                            </div>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <div class="row mb-3 px-3" style={{color:`white`}}> <button type="submit" class="btn btn-blue text-center" disable={loading} to="/Home">Log in</button></div>
                            <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <Link class="text-danger" to="/Signup">Register</Link></small> </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="bg-blue py-4">
                <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2021. All rights reserved.</small>
                    <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login
