import React from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';


const MyPosts = () => {
    return <div className={s.Posts}>
    <div className={s.item}>News</div> 
    <div className={s.item}>Post1</div> 
    <div className={s.item}>Post2</div> 
    <div className={s.item}>Post3</div> 
     
   </div>
}

export default MyPosts;