import React from 'react'
import './resume.css'
import edu from'../assets/education.png'
import redhat from '../assets/redhat.png'
import ai from '../assets/Ai.png'
import nptel from '../assets/nptel.png'
import ipr from '../assets/ipr.png'
import grras from '../assets/grras.png'
import cert from '../assets/cert.png'
import skill from '../assets/skill.png'


const Resume = () => {
  return (
    <div id='resume'>
      <div id='head'><h1>Resume</h1></div>
      {/* education */}
       <div id='educat'>
                <img src={edu} alt="education" />
                <h2>Education</h2>
            </div>
            <div className="bullet">
              <div id='bullet-font'>●</div>
              <div>
                <p>Rajasthan Technical University</p>
                <p className='year'>2023-2027</p>
                <p>Bachelor of Technology in Computer Science and Engineering</p>
                <p>9.4 CGPA</p>
              </div>
            </div>
            <div className="bullet">
              <div id='bullet-font'>●</div>
              <div>
                <p>Central Board of Secondary Education (XII)</p>
                <p className='year'>2022-2023</p>
                <p>Physics, Chemistry and Mathematics</p>
                <p>78.80%</p>
              </div>
            </div>
            <div className="bullet">
              <div id='bullet-font'>●</div>
              <div>
                <p>Central Board of Secondary Education (X)</p>
                <p className='year'>2020-2021</p>
                <p>83.80%</p>
              </div>
            </div>

        {/*certifications*/ }
        <div id='educat'>
                <img src={cert} alt="certifications" />
                <h2>Certifications</h2>
            </div>

        <div id='certificates'>
          <div className='cert-name'>
            <img src={redhat} alt="redhat" />
            <p>Red Hat Certified System Administrator</p>
          </div>
          <div className='cert-name'>
            <img src={nptel} alt="nptel" />
            <p>Problem Solving Through Programming in C</p>
          </div>
          <div className='cert-name'>
            <img src={ai} alt="AI" />
            <p>Digital Productivity With AI</p>
          </div>
          <div className='cert-name'>
            <img src={ipr} alt="IPR" />
            <p>Institute of Plasma Research</p>
          </div>
        </div>

        {/*skills*/ }

        <div id='educat'>
                <img src={skill} alt="skill" />
                <h2>Skills</h2>
            </div>

        <div id='main-skill'>
          <div className='name--'>
          C language
          <div className='outer'><div className='inner-c'></div></div>
        </div>
        <div className='name--'>
          C++
          <div className='outer'><div className='inner-cpp'></div></div>
        </div>
        <div className='name--'>
          Frontend Development
          <div className='outer'><div className='inner-fe'></div></div>
        </div>
        <div className='name--'>
          DSA
          <div className='outer'><div className='inner-dsa'></div></div>
        </div>
        </div>
        

    </div>
  )
}

export default Resume