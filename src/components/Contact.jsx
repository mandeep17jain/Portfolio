import React from 'react'
import maill from "../assets/gmail.webp"
import "./Contact.css"
import linkedin from "../assets/linkedin.jpg"
import insta from "../assets/insta.avif"
import Navbar from './Navbar'
// import call from "../assets/call.jpg"

export const Contact = () => {
  return (
    <div className='downdiv-contact'>
        <Navbar/>
            
                 <div id="about-contact">
                
                  <div id="heading">Contact</div><br />
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7304451.699304348!2d73.87834709999998!3d26.628406449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1755270580905!5m2!1sen!2sin" ></iframe>

                  <div id="main-links">
                         <div id="contact-links">

                          <div className='contact-logo'>
                                <img src={linkedin} alt="linkedin" />
                                <a href="https://www.linkedin.com/in/mandeep-nalwaya-4a00a72a2" target="_blank" rel="noopener noreferrer">LinkdIn</a>
                          </div>

                          <div className='contact-logo'>
                            <img src={insta} alt="" />
                            <a href="https://www.instagram.com/mandeep_jain17/" target="_blank" rel="noopener noreferrer">Instagram</a>
                          </div>

                         <div className='contact-logo'>
                            <img src={maill} alt="mail" />
                            <a href="mailto:mandeepnalwaya@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                           </div>

                  </div>

                  
                 
                </div>
            </div>
                 
                
        

             
    </div>
  )
}
