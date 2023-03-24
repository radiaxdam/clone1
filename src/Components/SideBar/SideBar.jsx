import React from 'react'
import style from './SideBar.module.css'
import img from './../../img/img.jpeg'
import {RiHome5Line} from 'react-icons/ri'
import {BsBookmarkPlus} from 'react-icons/bs'
import {TiMessages} from 'react-icons/ti'
import {MdInsights} from 'react-icons/md'
import {AiOutlineSetting} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'


const SideBar = () => {
  return (
      <div className={style.sideBar}>

      <div className={style.profileContainer}>
        <img src={img} alt="profile" className={style.profile} />
      </div>

      <ul className={style.navigationList}>
        <li className={style.navigationListItems}>
          <RiHome5Line className={style.icon}/>
        </li>
        <li className={style.navigationListItems}>
          <BsBookmarkPlus className={style.icon}/>
        </li>
        <li className={style.navigationListItems}><TiMessages className={style.icon}/></li>
        <li className={`${style.navigationListItems} ${style.active}`}><MdInsights className={style.icon}/></li>        
        <li className={style.navigationListItems}><AiOutlineSetting className={style.icon}/></li>
      </ul>

      
      <div className={style.logOutContainer}>
          <BiLogOut className={style.icon}/>
      </div>


   
      </div>
      

    )
}

export default SideBar