import React from 'react'
import './sidebar.css'
import sidebarimg from '../assets/img/kavindu1.JPG'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-item'>
            <span className='sidebar-title'>ABOUT ME</span>
            <img src={sidebarimg} alt=''className='sidebarimg'/>
            <p>As I share the pages of my life story, I hope to inspire, connect, 
            and remind each reader that we are all participants in the grand tapestry of humanity.</p>
        </div>
   <div className='sidebar-item'>
<span className='sidebar-title'>CATEGORIES</span>
<ul className='sidebar-list'>
    <li className='sidebar-listitem'>
        Life
    </li>
    <li className='sidebar-listitem'>
        Education
    </li>
    <li className='sidebar-listitem'>
        Hobbies
    </li>
    <li className='sidebar-listitem'>
        Style
    </li>
    <li className='sidebar-listitem'>
        Tech
    </li>
    <li className='sidebar-listitem'>
    Sports
    </li>
</ul>
   </div>
<div className='sidebar-item'>
    <span className='sidebar-title'>FOLLOW ME</span>
<div className='social-media'>
<i class="ri-facebook-circle-fill"></i>
        <i class="ri-twitter-x-line"></i>
        <i class="ri-pinterest-line"></i>
        <i class="ri-instagram-fill"></i>
</div>
</div>
    </div>
  )
}

export default Sidebar