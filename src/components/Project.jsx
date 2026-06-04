import React from 'react'
import './project.css'
import sketch from '../assets/sketch.png'
import notes from '../assets/notes.png'
import weather from '../assets/weather.png'

const Project = () => {
    return (
        <div id='project'>
            <h1>Project</h1>
            <div id='main-project'>
                <div className='project-card'>
                    <a className='pro' href="https://mandeep17jain.github.io/Sketch-gallery/" target="_blank" rel="noopener noreferrer">
                        <img src={sketch} alt="P1" />
                        <div className='hover-text'>View</div>
                        My Sketch Gallery
                        <div className='tech-used'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </a>
                </div>

                <div className='project-card'>
                    <a className='pro' href="https://notes-saver-man.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={notes} alt="P2" />
                        <div className='hover-text'>View</div>
                        Notes Saver App
                        <div  id='used-tech'>
                            <div id='three-p'>
                                <p>HTML</p>
                                <p>CSS</p>
                                <p>JavaScript</p>
                            </div>
                            <div id='three-p'>
                                <p>React </p>
                            </div>
                            
                        </div>

                    </a>

                </div>
                <div className='project-card'>
                    <a className='pro' href="https://mandeep17jain.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer">
                        <img src={weather} alt="P2" />
                        <div className='hover-text'>View</div>
                        Weather App
                        <div className='tech-used'>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Project