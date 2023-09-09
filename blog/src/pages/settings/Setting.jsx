import React from 'react'
import './setting.css'
import profile from '../../assets/img/kavindu.JPG'
import Sidebar from '../../sidebar/Sidebar'
const Setting = () => {
  return (
    <div className='settings'>
<div className='settingswrapper'>
  <div className='settingsTitle'>
  <span className='settingsupdatetitle'>Update Your Account</span>  
  <span className='settingsdeletetitle'> Delete Account</span> 
  </div>
  <form className='settingsform'>
<label>Profile Picture</label>
<div className='settingsPP'>
   <img src={profile} alt=''/> 
   <label htmlFor='fileinput'>
   <i class="ri-user-fill"></i>
   </label>
   <input type='file' id='fileinput' style={{display:'none'}}/>
</div>
<label> Username</label>
<input type='text' placeholder='martin'/>
<label>Email</label>
<input type='email' placeholder='email'/>
<label> Password</label>
<input type='password' />
<button className='settingsSubmit'>
    Update
</button>
  </form>
</div>
<Sidebar/> 
    </div>
  )
}

export default Setting