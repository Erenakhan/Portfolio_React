import React from 'react'
import { useState } from 'react'
import Projects from './Projects'
import Tech from './Tech'
import Contact from './Contact'

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
            <h3>React developer</h3> 
            <button className={styles} onMouseLeave={leave}
             onMouseEnter={enter}><a href='#reach'>Reach me</a></button> 
        </div>
    </div>

    <div className="main-2">
        <div className="about" id='about'>
          <div className='label-about'>
             <h1 className='about-h'>About me</h1>
             <h3 className='hello'>hello <div className='img'><img src='https://avatars.githubusercontent.com/u/100142188?v=4'></img></div>
             </h3>
             <p className='about-info'>My name is Mustafa Eren. I'm Software Developer. My purpose is that make people's life easier in software technologies.</p>
          </div>
        </div>
    </div>

    <div id='projects'>
      <Projects />
    </div>
    <hr />
    <div id='tech'>
    <Tech />
    </div>
    <div className="contact">
      <Contact />
    </div>

    </>

  )
}

export default Main