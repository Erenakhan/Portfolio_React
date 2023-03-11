import React from 'react'
import { useState } from 'react'

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
                <li><a href="#home">About me</a> </li>
                <li><a href="#home">Projects</a>  </li>
                <li><a href="#home">Tech</a> </li>
                <li><a href="#home">Contact</a> </li>
            </ul>
        </div>
        <div className="label">
            <h1>Mustafa Eren Akhan</h1>
            <h3>React developer</h3> 
            <button className={styles} onMouseLeave={leave}
             onMouseEnter={enter}><a href='#reach'>Reach me</a></button> 
        </div>
        

    </div>

    <div className="main-2">

        <div className="home" id='home'>hello</div>

    </div>

    </>

  )
}

export default Main