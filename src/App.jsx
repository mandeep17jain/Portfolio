import { useState } from 'react'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import './App.css'
import Sidebar from './components/Sidebar'
import {BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom"
import { Contact } from './components/Contact'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import ScrollToTop from './components/ScrollToTop'


const router=createBrowserRouter(
  [
    { path:"/", element:
    <div className='main-div'>
      <div className='second'>
        <ScrollToTop />
        <Aboutme/>
        <Sidebar/>
      </div>
    </div>
    },

    { path:"/resume", element:
      <div className='main-div'>
        
        <div className='second'>
          <Resume/>
          <Sidebar/>
        </div>
      </div>
      },

      { path:"/portfolio", element:
      <div className='main-div'>
        
        <div className='second'>
          <Portfolio/>
          <Sidebar/>
        </div>
      </div>
      },

      { path:"/contact", element:
      <div className='main-div'>
        <div className='second'>
          <Contact/>
          <Sidebar/>
        </div>
      </div>
      }

  ]
)

function App() {
 

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App