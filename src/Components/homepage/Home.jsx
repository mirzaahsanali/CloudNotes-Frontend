import React, { useContext } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import UserContext from '../../Context/User/UserContext'

const Home = () => {
    const userContext = useContext(UserContext);
    const {authToken} = userContext
    return (
        <>
            <div className="mainDiv">
                <p className="text1" >Your Notes on the Cloud.</p>
                <p className="text2">Access - Anytime - Anywhere.</p>
                <Link className="button" to={authToken==="tokennotfound"?"/signup":"/writeusernote"}>Get Started</Link>
            </div>
        </>
    )
}

export default Home