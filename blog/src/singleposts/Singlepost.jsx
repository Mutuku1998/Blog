import React from 'react'
import singleimg from '../assets/img/pexels-luis-del-río-15286.jpg'
import './singlepost.css'
const Singlepost = () => {
  return (
    <div className='singlepost'>
<div className='singlepost-wrapper'>
    <img src={singleimg} alt='' className='singlepostimg'/>

<h1 className='singleposttitle'>My Adventure in the Wilderness</h1>
</div>
    </div>
  )
}

export default Singlepost;