import React from 'react'
import Navbar from './Navbar'
import "./Portfolio.css"
import kanha from "../assets/art-web.png"
const Portfolio = () => {
  return (
     <div className='downdiv-port'>
             <Navbar/>
            
                 <div id="about-port">
                  
                          <div id="heading-port">Portfolio</div><br />

                          <a href="https://mandeep17jain.github.io/Sketch-gallery/" target="_blank" rel="noopener noreferrer">
                          <div id="main-tag">
                            <img src={kanha} alt="art" />
                            <div id="hover-text">View</div>
                            <p id="caption">My Creative Side</p>
                          </div>  
                          </a>
                          


                         
                 </div>
                
        

             
    </div>
 
  )
}

export default Portfolio