import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../../firebase/config' 
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import './SignInForm.sass'
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const user = await signInWithEmailAndPassword(auth, email, password);
        } catch(err){
          console.log(err.message);
        }

        setEmail('');
        setPassword('');
  }
  return(
      <div className="form-container">
          <h1>Sign In</h1>
          <form action="" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email"
              onChange={e => setEmail(e.target.value)} />
            <input 
              type="password" 
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} />

            <button className='signin-btn'>Sign In</button>
            <span className='OR'>OR</span>
            <button className='google-sign-in signin-btn'>
            <FontAwesomeIcon icon={faGoogle} />
              Sign In with Google
            </button>

            <span className='FP'>Forgot Password?</span>
          
            <span className='DHAA'>
              Don't have an account?  
              <Link to="/signup">
                <span className='sign-up-btn'>Sign Up</span>
              </Link>
            </span>
          </form>
      </div>
  )
}

export default SignInForm;
