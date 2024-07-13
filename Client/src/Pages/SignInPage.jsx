import React from "react";
import './styles/SignInPage.sass';
import SignInForm from '../Components/SignInForm/SignInForm'

const SignInPage = () => {
    return (
        <section className="container">
            <div className="back-image"></div>
            <SignInForm/>
        </section>
    )
}

export default SignInPage;