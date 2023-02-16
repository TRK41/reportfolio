import React from 'react'
import githubavatar from '../Assets/githubavatar.png'
import "../pages/css/AboutMe.css"
function AboutMe() {
  return (
    <div className='AboutMe'>
      <div className='avatar'><img src={githubavatar} alt="github avatar"/></div>
      <h1>About Me</h1>
      
      <p className='text'>Hi, my name is Troy Reid-Knight.  I am a Full Stack Developer  
        From Toronto,Canada.   I have a passion for creating applications and websites.  
        Please enjoy my portfolio.  
        Thank you!
      </p>
    </div>
  )
}

export default AboutMe
