import React from 'react'
import './Topbar.css';
import profile from '../assets/img/mutuku.png'
const Topbar = () => {
  return (
    <div className='top'>
        <div className='top-left'>
        <i class="ri-facebook-circle-fill"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-pinterest-line"></i>
        <i class="ri-instagram-fill"></i>
        </div>
        <div className='top-center'>
            <ul className='top-list'>
              <li className='top-list-item'>HOME</li>
              <li className='top-list-item'>ABOUT</li>
              <li className='top-list-item'>CONTACT</li>
              <li className='top-list-item'>WRITE</li>  
              <li className='top-list-item'>LOGOUT</li>

            </ul>
        </div>
        <div className='top-right'>
           <img src={profile} alt='blog' className='blogimg'/>
           <i class="ri-search-line"></i>
        </div>
    </div>
  )
}

export default Topbar