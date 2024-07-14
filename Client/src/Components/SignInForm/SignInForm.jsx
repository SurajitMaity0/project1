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
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong!");
  const [user, setUser] = useState({});
  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const user = await signInWithEmailAndPassword(auth, email, password);
        } catch(err){
          console.log(err.message);
          setErrorMessage(err.message);
          setError(true);
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
            {error && 
              <div className="error">
                {errorMessage}
              </div>
            }

            <span className='OR'>OR</span>
            <button className='google-sign-in signin-btn'>
            <FontAwesomeIcon icon={faGoogle} />
              Sign In with Google
            </button>

            <div className='FP'>Forgot Password?</div>
          
            <div className='DHAA'>
              Don't have an account?  
              <Link to="/signup">
                <span className='sign-up-btn'>Sign Up</span>
              </Link>
            </div>
          </form>
      </div>
  )
}

export default SignInForm;
