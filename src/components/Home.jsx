import React, { useEffect } from 'react'
import './home.css'
import avatr from '../assets/avatar.png'

import aero from '../assets/aero.png'

const Home = () => {

  return (
    <div id='home'  >
      
        
          <div id="left">
            <p id='hello'>Hello, I'm</p>
            <p id='name'>Mandeep Nalwaya</p>
            <p id='description'>Learning and growing as a full stack developer</p>
            
            <a  id='btn-resume'href="" download> <button id='resume-btn'><img src={aero} alt="" /> Resume</button></a>
            
        </div>
       
          <img id='avatar' src={avatr} alt="avtar" />
        
        </div>
        
  )
}

export default Home