import React from 'react'
import "../pages/css/Portfolio.css"
import Projects from '../components/Projects'
import project1 from "../Assets/project1.jpg"
import project2 from "../Assets/project2.jpeg"
import project3 from "../Assets/project3.png"
import project4 from "../Assets/project4.png"
import project5 from "../Assets/project5.png"
import project6 from "../Assets/project6.png"
// import project7 from "../Assets/project7.png"

function Portfolio() {
  return (
    <div className='portfolios'>
      <h1> My Projects</h1>
      <div className="portfolioList">
      <Projects name="Horiseon Css layout" image={project1} link= 'https://trk41.github.io/Horiseon-accessibility-project/' ></Projects>
      <Projects name="Html portfolio" image={project2}></Projects> 
      <Projects name="Password Generator" image={project3}></Projects>
      <Projects name="Agenda" image={project4}></Projects> 
      <Projects name="ReadMe Generator" image={project5}></Projects>
      <Projects name="Note Taker" image={project6}></Projects>
      {/* <Projects name="Team Profiles" image={project7}/>  */}
      </div>
    </div>
  )
}

export default Portfolio
