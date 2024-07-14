import React from "react";
import { useNavigate } from "react-router-dom";
import './styles/ErrorPage.sass';

const ErrorPage = () => {
    const navigate = useNavigate();
    return(
        <section className="error-page">
            <div className="left">
                <img src="./error.jpg"/>
            </div>
            <div className="right">
                <div className="four-zero-four">404</div>
                <div className="error-message">
                    <div className="bar"></div>
                    The page you are looking for could not be found
                </div>
                <button className="go-back-btn" onClick={()=> navigate('/home')}>Go to Home</button>
            </div>
        </section>
    )
}

export default ErrorPage;