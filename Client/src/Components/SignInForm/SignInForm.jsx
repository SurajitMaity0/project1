import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import './SignInForm.sass'
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Something went wrong!");

  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          await signIn(email, password);
          setEmail('');
          setPassword('');
          navigate('/home');
        } catch(err){
          console.log(err.message);
          setErrorMessage(err.message);
          setError(true);
        }
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
