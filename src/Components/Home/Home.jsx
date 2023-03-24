import React from 'react'
import SideBar from '../SideBar/SideBar'
import style from './Home.module.css'
import ChatBar from '../ChatBar/ChatBar'
import MessageBar from '../MessageBar/MessageBar'
import RightBar from '../RightBar/RightBar'
const Home = () => {

  return (
    <>
    <div className={style.home}>
    <SideBar/>  
    <ChatBar/>
    <MessageBar/>
    <RightBar/> 

    </div>
    </>
  )
}

export default Home