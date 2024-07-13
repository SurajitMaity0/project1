import React from 'react'
import './Login.sass'
const Login = () => {
  return (
    <>
      <div className='Login'>
        <div className="bg">
          <img src="" alt="" />
        </div>
        <div className="logo-login">
          <img src="" alt="" />
        </div>


        <div className='login-form-container'>
          <div className="login-form">
            <h1>Sign In</h1>
            <form action="">
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button className='signin-btn'>Sign In</button>
              <span className='OR'>OR</span>
              <button className='google-sign-in signin-btn'>Sign In with Google</button>

              <span className='FP'>Forgot Password?</span>
            
              <span className='DHAA'>Don't have an account? <span className='sign-up-btn'>Sign Up</span></span>
            </form>
          </div>
        </div>


      </div>
    </>
  )
}

export default Login;