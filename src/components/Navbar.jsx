import React from 'react'
import "./Navbar.css"
import {NavLink} from "react-router-dom"

 
const Navbar = () => {
  
  return (
    <div id="navbar">
      <ul id="nav-list">
        <li>
          <NavLink className={({isActive})=>(isActive?'active':'')} id="no-underline" to="/">About </NavLink>
        </li>
        <li>
        <NavLink  className="no_underline" to="/Resume">Resume</NavLink>
        </li>
        <li>
        <NavLink className="no_underline" to="/Portfolio">Portfolio</NavLink>
        </li>
        <li>
        <NavLink className="no_underline" to="/contact">Contact</NavLink>
        </li>
        
      </ul>

    </div>
  )
}

export default Navbar