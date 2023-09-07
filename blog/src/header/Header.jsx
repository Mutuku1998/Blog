import React from 'react'
import './header.css'
import headerimg from '../assets/img/pexels-jess-bailey-designs-768472.jpg';
const Header = () => {
  return (
    <div className='header' >
  <div className='header-titles'>
    <span className='header-title1'>Martin KE</span>
    <span className='header-title2'>Blog</span>
  </div>
  <img src={headerimg} alt=''className='headerimg'/>
    </div>
  )
}

export default Header