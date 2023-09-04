import React, { useState } from 'react'
import '../Sass/LoginComponent.scss'
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import LinkedinLogo from '../assets/linkedinLogo.png'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const LoginComponent = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({})
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Signed In To LinkedIn')
      navigate("/home")
    } catch(error) {
      toast.error(` Your Password Or Email Isn't Correct `)
      console.log(error)
    }
  }

  const googleSignIn = () => {
    let res = GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo}  className='linkedinLogo' />
      
      <div className='login-wrapper-inner'>
      <h1 className='heading'>Sign in</h1>
      <p className='sub-heading'>Stay updated on your professional world</p>
      
        <div className='auth-inputs'>
          <input onChange={(event) => {
            setCredentials({...credentials, email: event.target.value})
          }} 
          type='email'
          className='common-input' 
          placeholder='Email or Phone'
          />

          <input
          onChange={(event) => {
            setCredentials({...credentials, password: event.target.value})
          }}  

          className='common-input'  
          type='password'
          placeholder='Password'/>
          </div>
      <button onClick={login} className='login-btn'>Sign In</button>

      </div>
      <hr className='hr-text' data-content="or"></hr>
      <div className='google-btn-container'>
      <GoogleButton className='google-btn' onClick={googleSignIn}/>
      <p className='go-to-signup'>New To LinkedIn?{' '}<span className='join-now' onClick={() => navigate('/register') }>Join now</span></p>
      </div>
    </div>
  )
}

export default LoginComponent
