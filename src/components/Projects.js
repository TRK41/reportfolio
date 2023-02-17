import React from 'react'

function Projects({image,name,link,github}) {
  return (
    <div className='projects'>
        <div style={{backgroundImage: `url(${image})` }} className='bgImage'/>
            <h1> {name} </h1>
            <h2> {link} </h2>
            <h2> {github} </h2>
    </div>
  );
}

export default Projects
