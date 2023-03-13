import React from 'react'
import '../App.css'

function Contact() {
  return (
    <div className='contact-container'>
        <div className="form">
        <form 
        action="https://formsubmit.co/akhanmustafaeren@gmail.com" method="POST" >
     <input type="text" name="name" required  placeholder='name'/>
     <input type="email" name="email" required placeholder='email address' />
     <textarea className='text' type="text" placeholder='write me...'/>
     <button type="submit">Send</button>
     </form>
        </div>
        </div>
  )
}

export default Contact