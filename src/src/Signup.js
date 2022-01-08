import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom";
import {BsFacebook, BsTwitter, BsLinkedin} from "react-icons/bs";
import {useAuth} from "./contexts/AuthContext";
import {Alert} from "react-bootstrap"

function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password does not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
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
                    <div class="card2 card border-0 px-4 py-5" onSubmit={handleSubmit}>
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
                        {JSON.stringify(currentUser)}
                        <div class="row px-3 mb-4">
                            <div class="line"></div> <small class="or text-center">Or</small>
                            <div class="line"></div>
                        </div>
                        <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">User Name</h6>
                            </label> <input class="mb-4" type="text" name="username" placeholder="Enter the name you want to show" required/> </div>
                        <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Email Address</h6>
                            </label> <input class="mb-4" type="text" name="email" ref={emailRef} placeholder="Enter a valid email address" /> </div>
                        <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Password</h6>
                            </label> <input type="password" name="password" ref={passwordRef} placeholder="Enter password" required/> </div>
                        <div class="row px-3"> <label class="mb-1">
                                <h6 class="mb-0 text-sm">Retype password</h6>
                            </label> <input type="password" name="retypepassword" ref={passwordConfirmRef} placeholder="Enter password again" required/> </div>
                        <div class="row px-3 mb-4">
                            <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input" /> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> 
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div class="row mb-3 px-3" style={{color:`white`}} disabled={loading} type="submit"> <a href="/Login" class="btn btn-blue text-center" >Sign up</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Signup