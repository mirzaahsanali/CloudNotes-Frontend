import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SignupPage.css"
import UserContext from '../../Context/User/UserContext'


const SignupPage = () => {
    
    const navigate = useNavigate()
    const userContext = useContext(UserContext)
    const { UserSignup, authToken } = userContext
    
    
    const [newUser, setNewUser] = useState({ name: "", email: "", password: "" })
    
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSignup = async() => {
        await UserSignup(newUser.name, newUser.email, newUser.password)
    }
    
    useEffect(() => {
        if (authToken !== "tokennotfound") {
            navigate("/writeusernote");
        }
    }, [authToken])

    return (
        <>
            <div className="page">
                <div className="middleDiv">
                    <div className="formDiv">
                        <h1 className='text1'>Signup</h1>
                        <form action="">
                            <p className="fieldName">Name</p>
                            <input className='inputField form-control' type="text" name="name" placeholder="Enter your good name" onChange={handleChange} />
                            <p className="fieldName">Email</p>
                            <input className='inputField form-control' type="email" name="email" placeholder="Enter your email" onChange={handleChange} />
                            <p className="fieldName">Password</p>
                            <input className='inputField form-control' type="password" name="password" placeholder="Enter your password" onChange={handleChange} />
                            <center>
                                <p className="text3">Already have and Account? <Link className='link' to="/login" >Login</Link></p>
                                <div className="button" onClick={handleSignup}>Sign Up</div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage