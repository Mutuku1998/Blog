import React from 'react'
import './post.css'
import post1 from '../assets/img/pexels-luis-del-río-15286.jpg'
const Post = () => {
  return (
    <div className='post'>
<img className='postimg' src={post1} alt=''/>
<div className='postinfo'>
    <div className='postcats'>
    <span className='postcat'>Life</span>
        <span className='postcat'>Adventure</span>

    </div>
    <span className='posttitle'>
    Lost and Found: My Adventure in the Wilderness
    </span>
    <hr/> 
    <span className='postdate'> 1 Month ago</span>
</div>
<p className='postdescr'>
I've always been drawn to the beauty and serenity of the great outdoors. 
So, when the opportunity arose for a 
solo camping trip in the remote wilderness of the Sokoke forest, 
I jumped at the chance. Little did I know that this adventure would turn into an unforgettable
 story of survival and self-discovery.  
</p>

    </div>
  )
}

export default Post