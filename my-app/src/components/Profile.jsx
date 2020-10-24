import React from 'react';
import './Profile.css';

const Profile = () =>{ 
    return<div className='content'>
    <div> <img src='https://www.pixelstalk.net/wp-content/uploads/2016/09/Free-it-computer-wallpapers-download.jpg'/> </div>

    <div>Avatar + description<img src='https://i.pinimg.com/originals/48/75/f8/4875f8ebfbc2106393e041e872a10d08.png'/></div>
    <div> My posts </div>
    <div className='Post'> New posts</div>
      
    
    <div className='item_posts'>
      <div className='item_post'>Post1</div>
      <div className='item_post'>Post2</div>
      <div className='item_post'>Post3</div>
      <div className='item_post'>Post4</div>
    </div>
    
</div>
}

export default Profile;