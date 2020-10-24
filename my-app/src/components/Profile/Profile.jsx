import React from 'react';
import MyPosts from './../MyPosts/MyPosts';
import './Profile.module.css';
import s from './Profile.module.css';

const Profile = () =>{ 
    return <div className={s.content}>
    <div>
       <img src='https://www.pixelstalk.net/wp-content/uploads/2016/09/Free-it-computer-wallpapers-download.jpg' /> </div>

    <div>Avatar + description<img src='https://i.pinimg.com/originals/48/75/f8/4875f8ebfbc2106393e041e872a10d08.png'id={s.image_small}/></div>
   <MyPosts />
</div>
}

export default Profile;