import React from 'react'
import './Topbar.css';
import profile from '../assets/img/kavindu.JPG'
import { Link } from 'react-router-dom';
const Topbar = () => {
  const user = true;
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
              <li className='top-list-item'>
                <Link to='/home' className='link'> HOME </Link>
              </li>
              <li className='top-list-item'>
              <Link className='link'> ABOUT </Link>
              </li>
              <li className='top-list-item'>CONTACT</li>
              <li className='top-list-item'>
                <Link to='/write' className='link'> WRITE</Link>
                </li>  
              <li className='top-list-item'>
{ user && 'LOGOUT'}
              </li>

            </ul>
        </div>
        <div className='top-right'>
          {
           user ?(
            <img src={profile} alt='blog' className='blogimg'/>
           ):(
            <ul className='top-list'>
              <li className='top-list-item'> 
              <Link to='/login' className='link'>LOGIN</Link>
              </li>
              <li className='top-list-item'>
              <Link to='/register' className='link'>REGISTER</Link>
              </li>
            </ul>
           ) 
          }
          
           <i class="ri-search-line"></i>
        </div>
    </div>
  )
}

export default Topbar