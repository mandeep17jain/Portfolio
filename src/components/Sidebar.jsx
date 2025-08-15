import React from 'react'
import "./Sidebar.css"
import avatar1 from "/public/avatar1.jpg"
import mail from "../assets/mail.jpg"
import loc from "../assets/loc.jpg"
import call from "../assets/call.jpg"
import linkedin from "../assets/linkedin.jpg"
import github from "../assets/github.png"

const Sidebar = () => {
  return (
    
      
      <div id="profile">
                         <div id="border">
                          <img id="pro-photo" src={avatar1} alt="fvf" />
                         <div id="name">Mandeep Nalwaya</div>
                         
                         <div id="p-info">
                          <label className='labels' htmlFor="bdy">BIRTHDAY</label>
                          <div className='info-inner' id="bdy"> 
                            <img src={call} alt="call" />
                            <p>1 July 2006</p>
                          </div>
<br />
                         <label htmlFor='mail'  className='labels'>EMAIL</label><br />
                          <div id="mail" className='info-inner'>
                          <img src={mail} alt="mail" />
                          <a href="mailto:mandeepnalwaya@gmail.com">mandeepnalwaya@gail.com</a>
                          </div>
<br />
                         <label className='labels' htmlFor="loc">ADDRESS</label>
                         <div id="loc" className='info-inner'>
                          <img src={loc} alt="address" />
                         <p>Udaipur,Rajasthan,313001</p>

                         </div>
                         </div>

                         <div className='logos'>
                          <a href="https://www.linkedin.com/in/mandeep-nalwaya-4a00a72a2" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                         <a href="https://github.com/mandeep17jain" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                         </div>
  
                         </div>
                 </div>
   
    
    
         
  
  )
}

export default Sidebar