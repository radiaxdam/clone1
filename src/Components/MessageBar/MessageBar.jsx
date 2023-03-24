import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineVideoCamera, AiOutlineSetting } from 'react-icons/ai'
import img from './../../img/img.jpeg'
import style from './MessageBar.module.css'

const MessageBar = () => {
  return (

    <div className={style.messageDivision}>

      <div className={style.divisionHeading}>
        <p className={style.heading}>
          Message Detail
          <hr/>
        </p>
      </div>

      <div className={style.userHeader}>
        <div className={style.profileAndName}>

          <div className={style.profileContainer}>
            <img src={img} alt="profile" className={style.profile} />
          </div>
          <div className={style.nameAndLastSeen}>
            <p className={style.userName} >UserName</p>
            <p>lastSeen</p>
          </div>

        </div>

        <div className={style.options}>
          <BsTelephone className={style.optionIcon} />
          <AiOutlineVideoCamera className={style.optionIcon} />
          <AiOutlineVideoCamera className={style.optionIcon} />
          <AiOutlineSetting className={style.optionIcon} />
        </div>


      </div>
      <div className={style.chatBlock}>
        <div className={style.timeDivision}>
          <span className={style.time}>
            24 March 2023
          </span>
        </div>
        <div className={style.messages}>
          <span className={style.sender} >Hello hello hello hello </span>
          <span className={style.reciver} >hi hihi hihi</span>
        </div>
        <div className={style.sendBar}>
          <div className={style.barProfileContainer}>
            <img src={img} alt="" className={style.barProfile} />
          </div>
          <input type="text" placeholder= "send a message" className={style.inputBox} />
          <span className={style.drafts} >
            1 Drafts
          </span>
    
          <span className={style.sendButton}>
            Send

          </span>
        </div>
      </div>


    </div>

  )
}

export default MessageBar