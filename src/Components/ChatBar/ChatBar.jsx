import React from 'react'
import style from './ChatBar.module.css'
import {AiOutlineSetting} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

import img from './../../img/img.jpeg'
const ChatBar = () => {
  return (
  <div className={style.chatBar}>
    
    <div className={style.searchBar}>
    <select className={style.selectBar}>
        <option value="categories">Categories</option>
  </select>

  <input type="text" placeholder='Search Message' className={style.input} />
  <BsSearch className={style.searchIcon} />

    </div>

    <div className={style.storiesContainer}>
     
      <div className={style.storiesContainerHeader}>
        <p style={{fontFamily:"vorkursBold"}} >Stories</p>
      <AiOutlineSetting className={style.settingIcon} />
      </div>  


    <div className={style.userContainer}>
   
      <div className={style.User}>
       
        <img src={img} alt="" className={style.userImage}/>
        <span className={style.liveText}>Live</span>
        </div>

        <div className={style.User}>
        <img src={img} alt="" className={style.userImage}/>
        <span className={style.liveText}>Live</span>
        </div>

    </div>

    </div>

    <div className={style.messageContainer}>
      <div className={style.messageContainerHeader}>
        <p>Message</p>
        <AiOutlineSetting className={style.settingIcon} />
      </div>
     
      <div className={style.messageItemContainer}>
        

      <div className={style.messageItem}>
          <div className={style.profileContainer}>
            <img src={img} alt="" className={style.profile}/>
            <span className={style.num}>10</span>
          </div>
          <div className={style.messageInformation}>
            <p className={style.userName}>UserName</p>
            <p>Sent a message</p>
          </div>
          <div className={style.timeContainer}>
            <p>12:35</p>
          </div>
        </div>
        <div className={style.messageItem}>
          <div className={style.profileContainer}>
            <img src={img} alt="" className={style.profile}/>
            <span className={style.num}>10</span>

          </div>
          <div className={style.messageInformation}>
            <p className={style.userName}>UserName</p>
            <p>Sent a message</p>
          </div>
          <div className={style.timeContainer}>
            <p>12:35</p>
          </div>
        </div>
        <div className={style.messageItem}>
          <div className={style.profileContainer}>
            <img src={img} alt="" className={style.profile}/>
            <span className={style.num}>10</span>

          </div>
          <div className={style.messageInformation}>
            <p className={style.userName}>UserName</p>
            <p>Sent a message</p>
          </div>
          <div className={style.timeContainer}>
            <p>12:35</p>
          </div>
        </div>

      </div>
    </div>


  </div>
  )
}

export default ChatBar