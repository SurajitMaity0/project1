import React from "react";
import './styles/SignUpPage.sass';
import SignUpForm from '../Components/SignUpForm/SignUpForm'

const SignUpPage = () => {
    return (
        <section className="container">
            SignUp Page
            <div className="back-image"></div>
            <SignUpForm/>
        </section>
    )
}

export default SignUpPage;