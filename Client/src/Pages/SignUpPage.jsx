import React from "react";
import './styles/SignUpPage.sass';
import SignUpForm from '../Components/SignUpForm/SignUpForm'
import { UserAuth } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const SignUpPage = () => {
    const {user} = UserAuth();
    if(user){
        console.log(user.email);
        return <Navigate to='/home'/>
    }
    return (
        <section className="container">
            <div className="back-image"></div>
            <SignUpForm/>
        </section>
    )
}

export default SignUpPage;