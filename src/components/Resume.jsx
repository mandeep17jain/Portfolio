import React, { useState } from 'react'
import "./Resume.css"
import book from "../assets/book.jpeg"
import grey from "../assets/grey.jpg"
import cert from "../assets/cert.avif"
import certs from "../assets/certs.jpg"
import redhat from "../assets/redhat.jpg"
import nptel from "../assets/nptel.jpg"
import volunteer from "../assets/volunteer.jpg"
import skill from "../assets/skills.png"
import Navbar from './Navbar'



const Resume = () => {
  return (

            <div className='downdiv-resume'>
             <Navbar/>
            
                 <div id="about-resume">

                   <div id="heading">Resume</div><br />

                   <div id="heading-edu">
                                  <img src={book} alt="book" />
                                  <b>EDUCATION</b>
                                </div><br />
      
                              <div id="resume-content">

                                

                                <div className='bullet'>
                                  <img src={grey} alt="grey" /> 
                                  <div className='details'>
                                  <p className='Uni-name'>Rajasthan Technical University</p>
                                  <p className='year'>2023-2027</p>  
                                  <p >Bachelor of Technology in Computer Science and Engineering</p>   
                                  <p >9.6 CGPA</p>                            
                                  </div>
                                </div>

                                <div className='bullet'>
                                  <img src={grey} alt="grey" /> 
                                  <div className='details'>
                                  <p className='Uni-name'>Central Board of Secondary Education (XII)</p>
                                  <p className='year'>2022-2023</p> 
                                  <p>Physics, Chemistry and Mathematics</p>  
                                  <p>78.8%</p>                             
                                  </div>
                                </div>

                                <div className='bullet'>
                                  <img src={grey} alt="grey" /> 
                                  <div className='details'>
                                  <p className='Uni-name'>Central Board of Secondary Education (X)</p>
                                  <p className='year'>2020-2021</p>    
                                  <p >83.8%</p>                             
                                  </div>
                                </div>

                              </div><br />

                               {/* certificates */}
                                <div id="heading-edu">
                                  <img  src={cert} alt="book" />
                                  <b>CERTIFICATES</b>
                                </div><br />

                                <div id="certificates">
                                  <div className='p-img'>
                                    < img className="certimg"  src={redhat} alt="Redhat" />
                                    <p>Redhat Certified System Administrator</p>
                                  
                                  </div>

                                  <div className='p-img'>
                                    <img className="certimg" src={nptel} alt="nptel" />
                                    <p>Problem Solving Through Programming in C</p>
                                  </div>

                                  <div className='p-img'>
                                     <img className="certimg" src={certs} alt="P2E" />
                                     <p>Digital Productivity With AI</p>                                    
                                  </div>

                                  <div className='p-img'>
                                    <img className="certimg" src={volunteer} alt="IPR" />
                                    <p>   Scientific Volunteer (IPR)</p>
                                    </div>
                                </div><br />

                                {/* skills */}
                                <div id="heading-edu">
                                  <img  src={skill} alt="book" />
                                  <b>SKILLS</b>
                                </div><br />
                                
                                <div id="skill">
                                  <div className='skill-name'>C Language
                                    <div className='total'><div id='level1'></div></div> 
                                    
                                  </div>
                                  <div className='skill-name'> Object Oriented Programming
                                    <div className='total'><div id='level2'></div></div>
                                    
                                  </div>
                                  <div className='skill-name'> Frontend Development
                                    <div className='total'><div id='level3'></div></div>
                                  </div>
                                  <div className='skill-name'> Video Editing
                                    <div className='total'><div id='level4'></div></div>
                                  </div>
                                </div>



                  
                        
                </div>
                            
            </div>
                
        

             
  
        

             
  )
}

export default Resume