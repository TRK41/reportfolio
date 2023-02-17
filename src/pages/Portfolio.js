import React from 'react'
import "../pages/css/Portfolio.css"
import Projects from '../components/Projects'
import project1 from "../Assets/project1.jpg"
import project2 from "../Assets/project2.jpeg"
import project3 from "../Assets/project3.png"
import project4 from "../Assets/project4.png"
import project5 from "../Assets/project5.png"
import project6 from "../Assets/project6.png"
import { Link } from '@mui/material/'


// import project7 from "../Assets/project7.png"

function Portfolio() {
  return (
    <div className='portfolios'>
      <h1> My Projects</h1>
      <div className="portfolioList">
        <Projects name="Horiseon Css layout" image={project1}
          link={<Link href="https://trk41.github.io/Horiseon-accessibility-project/"> Website</Link>}
          github={<Link href='https://github.com/TRK41/Horiseon-accessibility-project'> GitHub</Link>}>
        </Projects>
        <Projects name="Html portfolio" image={project2}
          link= {<Link href="https://trk41.github.io/Portfolio/"> Website</Link>}
          github={<Link href='https://github.com/TRK41/Portfolio'> GitHub</Link>}>
        </Projects>
        <Projects name="Password Generator" image={project3}
        link= {<Link href="https://trk41.github.io/EasyPass/"> Website</Link>}
          github={<Link href='https://github.com/TRK41/EasyPass'> GitHub</Link>}>
        </Projects>
        <Projects name="Agenda" image={project4}
        link= {<Link href="https://trk41.github.io/agenda/"> Website</Link>}
        github={<Link href='https://github.com/TRK41/agenda'> GitHub</Link>}>
        </Projects>
        <Projects name="ReadMe Generator" image={project5}
        
        github={<Link href='https://github.com/TRK41/readThis'> GitHub</Link>}>
        </Projects>
        <Projects name="Note Taker" image={project6}
        link= {<Link href="https://noteta.herokuapp.com/"> Website</Link>}
        github={<Link href='https://github.com/TRK41/Noteta'> GitHub</Link>}>
        </Projects>
        {/* <Projects name="Team Profiles" image={project7}/>  */}
      </div>
    </div>
  )
}

export default Portfolio
