import React, { useState } from "react";
import { auth } from '../../firebase/config' 
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Link } from "react-router-dom";
import './SignUpForm.sass'

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  
  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const user = await createUserWithEmailAndPassword(auth, email, password);
        } catch(err){
          console.log(err.message);
        }

        setEmail('');
        setPassword('');
  }
  return(
      <div className="form-container">
          <h1>Sign Up</h1>
          <form action="" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email"
              onChange={e => setEmail(e.target.value)} />
            <input 
              type="password" 
              placeholder="Password"
              onChange={e => setPassword(e.target.value)} />

            <button className='signup-btn'>Sign Up</button>
            
            <span className='AHAA'>Already have an account? 
                <Link to="/">
                    <span className='sign-in-btn'>Sign In</span>
                </Link>
            </span>
          </form>
      </div>
  )
}

export default SignUpForm;
