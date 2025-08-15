import React from 'react'
import "./Aboutme.css"
import web from "../assets/web.png"
import art from "../assets/art1.webp"
import Navbar from './Navbar'

const Aboutme = () => {
  return (
    <div className='downdiv'>
             <Navbar/>
            
                 <div id="about">
                  
                          <div id="heading">About Me</div><br />
                         <div id="description">
                          
                          I am a undergraduate Engineering student. I enjoy programming and learning technologies. Currently i'm exploring the world of web development and continuosly trying out small projects to improve my skills. <br /><br />
                           Apart from coding, I also like sketching, singing, and painting. I enjoy being creative and trying new things in both tech and art.
                         </div><br /><br />

                  <b>What i'm doing</b><br />
                  <div id="head-what">
                    <div className="what-doing">
                    <div> <img src={web} alt="web" />
                    </div>
                  learning web development and working on small projects that help me understand how websites are built and how different technologies work together.

                  </div>

                  <div className="what-doing">
                    <div> <img src={art} alt="art" />
                    </div>
                  Turning blank pages into expressive portraits and stories with a pencil.
                  </div>

                  </div>
                  
                            
                 </div>
                
        

             
    </div>
    
  )
}

export default Aboutme