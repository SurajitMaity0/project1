import React from "react";
import './styles/SignInPage.sass';
import SignInForm from '../Components/SignInForm/SignInForm'
import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
    const {user} = UserAuth();
    if(user){
        console.log(user.email);
        return <Navigate to='/home'/>
    }

    return (
        <section className="container">
            <div className="back-image"></div>
            <SignInForm/>
        </section>
    )
}

export default SignInPage;