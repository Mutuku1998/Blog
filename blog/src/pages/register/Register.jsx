import React from 'react'
import './register.css'
const Register = () => {
  return (
    <div className='register'>
    <span className='registertitle'>Register</span>
<form className='registerform'>
<label>Username</label>
<input type='text' placeholder=' Enter Username'/>
<label>Email</label>
<input type='email' placeholder=' Enter your email'/>
<label>Password</label>
<input type='password'  placeholder='Enter your password'/>
<button className='registerbutton'>
    Register
</button>
</form>
<button className='loginbutton'>Login</button>
</div>
  )
}

export default Register