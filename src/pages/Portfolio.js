import React from 'react'
import Projects from '../components/Projects'


function Portfolio() {
  return (
    <div className='protfolios'>
      <h1> My Projects</h1>
      <div className="portfolioList">
      <Projects/>
      <Projects/>
      <Projects/>
      </div>
    </div>
  )
}

export default Portfolio
