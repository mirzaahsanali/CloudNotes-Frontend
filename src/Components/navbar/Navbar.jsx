import "./Navbar.css"
import React, { useContext } from 'react'
import { Link, useLocation } from "react-router-dom"
import UserContext from "../../Context/User/UserContext"
import ToastContext from "../../Context/Toast/ToastContext"

const Navbar = (props) => {
    const userContext = useContext(UserContext)
    const {user, authToken, setAuthToken} = userContext;

    const toastContext = useContext(ToastContext)
    const {notify} = toastContext;


    const handleLogout = () => {
        setAuthToken("tokennotfound")
        notify("Logout Successful")
    }

    let location = useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">CloudNote</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/usernotes" ? "active" : ""}`} to={authToken==="tokennotfound"?"":"/usernotes"}>My Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/writeusernote" ? "active" : ""}`} to={authToken==="tokennotfound"?"":"/writeusernote"}>Write a Note</Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {
                                    authToken==="tokennotfound" ?
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/signup">Sign Up</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">Log In</Link>
                                            </li>
                                        </> :
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                                            </li>
                                            <Link className="nav-link" style={{ border: "2px solid grey", borderRadius: "100px" }}>User: {user}</Link>
                                        </>
                                }
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar