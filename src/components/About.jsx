import React from 'react'
import './about.css'
import icon1 from'../assets/icon1.png'
import icon2 from'../assets/icon2.png'

const About = () => {
  return (
    <div id="about">
        <h1 id='head-about'>About me</h1>
        <div id='about-description'>
            <p>I am an undergraduate engineering student. I enjoy programming and learning new technologies. Currently, I am exploring the world of web development and continuously building small projects to improve my skills.</p>
        <p>Apart from coding, I also enjoy sketching, singing, and painting. I like being creative and exploring new things in both technology and art.</p>
        <p id='wht-doing'>What I'm doing</p>
        </div>
        
        <div id='main-cards'>
            
            <div className='cards'>
                <img className='about-icons' src={icon1} alt="1st" />
                Learning web development and working on small projects that help me understand how websites are built and how different technologies work together
            </div>
            <div className='cards'>
                <img className='about-icons' src={icon2} alt="2nd" />
                Turning blank pages into expressive portraits and stories with a pencil
            </div>

        </div>
        
        
    </div>
  )
}

export default About