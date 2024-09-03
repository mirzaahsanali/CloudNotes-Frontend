import React, { useContext, useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../Context/User/UserContext'

const LoginPage = () => {
    const navigate = useNavigate()
    const userContext = useContext(UserContext)
    const {UserLogin,authToken} = userContext;

    
    const [creds, setCreds] = useState({email: "" , password: ""})
    
    
    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = async() => {
        UserLogin(creds.email, creds.password)
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
                        <h1 className='text1'>Login</h1>
                        <form action="">
                            <p className="fieldName">Email</p>
                            <input className='inputField form-control' type="email" name="email" placeholder="Enter your email" onChange={handleChange}/>
                            <p className="fieldName">Password</p>
                            <input className='inputField form-control' type="password" name="password" placeholder="Enter your password" onChange={handleChange}/>
                            <center>
                                <p className="text3">Don't have an Account? <Link className='link' to="/signup">Signup</Link></p>
                                <div className="button" onClick={handleLogin}>Login</div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage