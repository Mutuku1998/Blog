import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='login'>
        <span className='logintitle'>Login</span>
<form className='loginform'>
    <label>Email</label>
    <input type='email' placeholder=' Enter your email'/>
<label>Password</label>
<input type='password' />
<button className='loginbutton'>
    Login
</button>
</form>
<button className='registerbutton'>Register</button>
    </div>
  )
}

export default Login