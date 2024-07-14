import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../../Context/AuthContext'
import './SignUpForm.sass'

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          await createUser(email, password);
          setEmail('');
          setPassword('');
          navigate('/home');
        } catch(err){
          console.log(err.message);
        }
  }
  return(
      <div className="form-container">
          <h1>Sign Up</h1>
          <form action="" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
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
