import React from 'react'
import './contact.css'

import mail from '../assets/mail.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import insta from '../assets/insta.png'
const Contact = () => {
  return (
    <div id='contact'>
        <h1>Contact</h1>

        <div id='iframe-div'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7310705.377581599!2d68.58443350077907!3d26.53040271567227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1780548156806!5m2!1sen!2sin" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id='contact-btn'>
          <a href="mailto:mandeepnalwaya@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="mail" /><button>Gmail</button></a>
          <a href="https://www.linkedin.com/in/mandeep-nalwaya/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkdin" /><button>Linkedin</button></a>
          <a href="https://github.com/mandeep17jain" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /><button>Github</button></a>
          <a href="https://www.instagram.com/mandeep_jain17/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="insat" /><button>Instagram</button></a>
        </div>


    </div>
  )
}

export default Contact