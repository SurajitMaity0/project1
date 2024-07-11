import React, { useState } from 'react'
import './Singup.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import logo from '../../../public/logo123.jpeg'


const Singup = (props) => {
        
    

    const [close, setClose] = useState(true);
    const handelClose = () => {
        setClose(false);
    }


    const [inputForm, setInputForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        });
    }
    const handleSingUp = () => {
        console.log(inputForm);
        axios.post('http://localhost:3000/user', inputForm)
        .then(response => {
            alert('Form Submitted Successfully');
            console.log(response);
        })
        .catch(error => {
            alert('Form Submission Failed');
            console.error(error);
        });


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputForm);
        alert('Form Submitted');

    }
    

    
  return (

    <>
        <div className="Singup">
            <div className="head">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                {/* //cluso button */}
                <div className="close" onClick={props.handelClose}>X</div>
            </div>
            
            <div className="body">
                <div className="title">Create Account</div>
                <div className="form" onSubmit={handleSubmit}>
                    <input type="text" name='firstName' placeholder="First Name" onChange={handleChange}/>
                    <input type="text" name='lastName' placeholder="Last Name" onChange={handleChange} />
                    <input type="email" name='email' placeholder="Email" onChange={handleChange}/>
                    <input type="password" name='password' placeholder="Password" onChange={handleChange} />
                    <input type="password" name='confirmPassword' placeholder="Confirm Password" onChange={handleChange} />
                    {/* button clike form submit */}
                    <button onClick={handleSingUp}>Sign Up</button>
                </div>
                <div className="footer">
                    <div className="text">Already have an account?</div>
                    <div className="link">Sign In</div>
                </div>
            </div>
            <div className="navsig">
                <div className="google"><FontAwesomeIcon icon={faGoogle} /></div>
                <div className="facebook"><FontAwesomeIcon icon={faFacebook} /></div>
                <div className="XTwitter"><FontAwesomeIcon icon={faXTwitter} /></div>
            </div>
            
        </div>
    </>
  )
}

export default Singup;