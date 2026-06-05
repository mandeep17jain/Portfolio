import React, { useState } from 'react'
import './navbar.css'
import menu from '../assets/menu.png'
import M from '../assets/M.png'
import { Link } from 'react-scroll'
const Navbar = () => {

  const [isOpen,setisOpen] = useState(false);

  return (
      <div  id='navbar' >
      <img id='m-logo' src={M} alt="M" />
      <div className='links'>
        <Link  className='all-links' activeClass='active' spy={true} smooth={true} offset={-45}  duration={400} to="home">Home</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-70}  duration={400} to="about">About</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-70}  duration={400} to="resume">Resume</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-56}  duration={400} to="project">Project</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-75}  duration={400} to="contact">Contact</Link>
      </div>

      <img  id='menu-icon' src={menu} alt="menu" onClick={() =>  setisOpen(!isOpen)}/>
      <div className={ isOpen?'links-menu':'links-off'}>
        <Link  className='all-links' activeClass='active' spy={true} smooth={true} offset={-200}  duration={400} to="home" onClick={()=>setisOpen (false)}>Home</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-70}  duration={400} to="about" onClick={()=>setisOpen (false)}>About</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-67}  duration={400} to="resume" onClick={()=>setisOpen (false)}>Resume</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-56}  duration={400} to="project" onClick={()=>setisOpen (false)}>Project</Link>
        <Link className='all-links' activeClass='active' spy={true} smooth={true} offset={-75}  duration={400} to="contact" onClick={()=>setisOpen (false)}>Contact</Link>
      </div>

    






    </div>
      )
}

export default Navbar