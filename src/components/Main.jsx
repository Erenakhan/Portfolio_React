import React from 'react'
import { useState } from 'react'
/////components//////
import Projects from './Projects'
import Tech from './Tech'
import Contact from './Contact'
import About from './About'

function Main() {
  const [styles, setStyles] = useState("buttonL")
  const leave =()=>{
    setStyles("buttonL")
  }
  const enter =()=>{
    setStyles("buttonE")
  }
  return (
    <>
    <div className='main'>
        <div className="nav">
            <ul>
                <li><a href="#about">About me</a> </li>
                <li><a href="#projects">Projects</a>  </li>
                <li><a href="#tech">Tech</a> </li>
                <li><a href="#contact">Contact</a> </li>
            </ul>
        </div>
        <div className="label">
            <h1 className='name'>Mustafa Eren Akhan</h1>
            <h3>React Developer</h3> 
            <button className={styles} onMouseLeave={leave}
             onMouseEnter={enter}><a href='#contact'>Reach me</a></button> 
        </div>
    </div>
    
    <div className="about" id='about'>
      <About />
    </div>
    <div id='projects'>
      <Projects />
    </div>
    <hr />
    <div id='tech'>
    <Tech />
    </div>
    <div id="contact">
      <Contact />
    </div>

    </>

  )
}

export default Main