import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="app-div">
        <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
