import React, { useState } from 'react'
import '../Sass/LoginComponent.scss'
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI'
import LinkedinLogo from '../assets/linkedinLogo.png'
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RegisterComponent = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({})
  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success('Account Created!')
      navigate('/home')
    } catch(error) {
      toast.error(`Can't Create Your Account`)
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
      <h1 className='heading'>Make the most of your professional life</h1>
      
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
          placeholder='Password (6 or more characters)'/>
          </div>
      <button onClick={login} className='login-btn'>Agree & Join</button>

      </div>
      <hr className='hr-text' data-content="or"></hr>
      <div className='google-btn-container'>
      <GoogleButton className='google-btn' onClick={googleSignIn}/>
      <p className='go-to-signup'>Already On Linkedin{' '}<span className='join-now' onClick={() => navigate('/login') }>Sign In</span></p>
      </div>
    </div>
  )
} // 1:41 minutes

export default RegisterComponent