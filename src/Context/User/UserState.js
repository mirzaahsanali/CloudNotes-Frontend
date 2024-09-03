import React, { useState, useContext } from "react";
import UserContext from "./UserContext";

import ToastContext from '../../Context/Toast/ToastContext'


const UserState = (props) => {
    
    const toastContext = useContext(ToastContext)
    const {notify} = toastContext;
    
	const [user, setUser] = useState("usernotlogin");
    const [authToken, setAuthToken] = useState("tokennotfound")
    const url = "http://localhost:5000";

	const UserLogin = async(email, password) => {
        const response = await fetch(`${url}/api/auth/login`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password})
        })
        const userLoggedIn = await response.json();
        if(userLoggedIn.errorOccured){
            notify("login failed")
        }else{
            await setUser(userLoggedIn.name)
            await setAuthToken(userLoggedIn.authorizationKey)
            notify("login successful")
        }
    };

    const UserSignup = async(name, email, password) => {
        const response = await fetch(`${url}/api/auth/createuser`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name, email, password})
        })
        const userSignup = await response.json();
        if(userSignup.errorOccured){
            notify("Signup failed")
        }else{
            await setUser(userSignup.name)
            await setAuthToken(userSignup.authorizationKey)
            notify("Signup successful")
        }
    }

	return (
		<UserContext.Provider value={{user, UserLogin, UserSignup, authToken, setAuthToken}}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;