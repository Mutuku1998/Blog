import React from 'react'
import singleimg from '../assets/img/pexels-luis-del-río-15286.jpg'
import './singlepost.css'
const Singlepost = () => {
  return (
    <div className='singlepost'>
<div className='singlepost-wrapper'>
    <img src={singleimg} alt='' className='singlepostimg'/>

<h1 className='singleposttitle'>My Adventure in the Wilderness
<div className='singlepostedit'>
<i class="ri-edit-box-fill"></i>
<i class="ri-delete-bin-line"></i>
</div>
</h1>
<div className='singlepostinfo'>
    <span className='singlepostauthor'>Author: <b>Mutuku</b></span>
    <span className='singlepostdate'>1 month ago</span>

</div>
<p className='singlepostdesc'> I've always been drawn to the beauty and serenity of the great outdoors. 
    So, when the opportunity arose for a solo camping trip in the remote wilderness of the Pacific Northwest, 
    I jumped at the chance. 
    Little did I know that this adventure would turn into an unforgettable story of survival and self-discovery.</p>
    <p className='singlepostdesc'>I set out on a crisp September morning, armed with a backpack filled with supplies,
         a trusty map, and a heart full of excitement. The first day was blissfully uneventful, 
         with the soothing sounds of nature surrounding me as I hiked deeper into the forest. 
        I pitched my tent by a crystal-clear stream and marveled at the starry sky that night.
        As I woke on the second day and continued my trek, things took an unexpected turn. 
        I lost my way in the dense woods, my map rendered useless by a sudden downpour.
         Panic set in as I realized I was truly alone and disoriented. 
        The feeling of vulnerability was overwhelming.
        
        </p>
</div>
    </div>
  )
}

export default Singlepost;