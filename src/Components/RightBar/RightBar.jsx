import React from 'react'
import {AiOutlineSetting} from 'react-icons/ai'
import facebook from './../../img/facebook.svg'
import tiktok from './../../img/tiktok.svg'
import instagram from './../../img/instagram.svg'

import style from './RightBar.module.css'
import img from './../../img/img.jpeg'

const RightBar = () => {
  return (
  <div className={style.rightBar}>

    <div className={style.upperBlock}>
        <div className={style.userInfo}>
            <div className={style.profileContainer}>
                
                <img src={img} alt="profile" className={style.profile} />

                </div>   
            <div className={style.nameAndLastSeen}>
            <p className={style.userName}>userName</p>
            <p className={style.LastSeen}>LastSeen Recently</p>
                </div>         
            
        </div>
        <div className={style.options}>

        <div className={style.iconContainer}>
            <img src={facebook} alt="icon"  className={style.icon} />
        </div>
        <div className={style.iconContainer}>
            <img src={tiktok} alt="icon"  className={style.icon} />
        </div>
        <div className={style.iconContainer}>
            <img src={instagram} alt="icon"  className={style.icon} />
        </div>

        </div>
    </div>

    <div className={style.mediaBlock}>
        <div className={style.mediaHeader}>
            <span>Media (4444) </span>
            <AiOutlineSetting className={style.settingIcon} />
        </div>
        <div className={style.imagesContainer}>
        <div className={style.imageContainer}>
                <img src={img} alt="" className={style.image} />
            </div>
            <div className={style.imageContainer}>
                <img src={img} alt="" className={style.image} />
            </div>
            <div className={style.imageContainer}>
                <img src={img} alt="" className={style.image} />
            </div>
            <div className={style.imageContainer}>
                <img src={img} alt="" className={style.image} />
            </div>
        </div>
        <div className={style.mediaMore}>
            <span>Load More Images</span>
        </div>
    </div>

    <div className={style.categoryDivision}>
        <div className={style.categoryHeader}>
            <span>Category Label</span>
            <AiOutlineSetting/>
        </div>
   
        <div className={style.categoryOptions}>
    <div className={style.inputContainer}>
    <input className={style.rdButtons} type="radio" id="important" />
  <label for="important" className={style.label}>Important</label>
        </div>
        <div className={style.inputContainer}>
  <input className={style.rdButtons} type="radio" id="customer" />
  <label for="customer" className={style.label}>Customer</label>  
  </div>
  <div className={style.inputContainer}>
  <input  className={style.rdButtons}type="radio" id="Friend" />
  <label for="Friend" className={style.label}>Freind</label>
  </div>
  <div className={style.inputContainer}>
  <input className={style.rdButtons} type="radio" id="Family" />
  <label for="Family" className={style.label}>Family</label>
  </div>
          </div>

          <span className={style.moreLabel}>
        Add Category Label
    </span>
    </div>

   

  </div>
  )
}

export default RightBar