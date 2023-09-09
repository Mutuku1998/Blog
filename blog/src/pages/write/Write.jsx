import React from 'react'
import './write.css'
import writeimg from '../../assets/img/pexels-pixabay-159711.jpg'
const Write = () => {
  return (
    <div className='write'>
      <img src={writeimg} alt='' className='writeimg'/>
        <form className='writeform'>
            <div className='writeformgroup'>
                <label htmlFor='fileInput'>
                <i class="ri-image-add-fill"></i>
                </label>
                <input type='file' name=''id='fileInput' style={{display:'none'}}/>
               <input type='text' placeholder='Title' className='writeinput' autoFocus={true}/>

            </div>
            <div className='writeformgroup'>
                <textarea placeholder='Tell your story...'type='text' className='writetext'>

                </textarea>
            </div>
<button className='writesubmit'>
    Publish
</button>
        </form>
    </div>
  )
}

export default Write