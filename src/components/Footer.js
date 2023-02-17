import React from 'react';
import  LinkedIn  from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import '../pages/css/Footer.css'



function Footer() {
  return (
    <div className='footer'>
      <div className='icons'>
        <GitHub/>
        <LinkedIn onClick= {event}/>
      </div>
      <p> &copy; 2023 TRK41 Portfolio</p>
    </div>
  )
}

export default Footer
