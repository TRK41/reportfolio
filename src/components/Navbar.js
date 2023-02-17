import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/css/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar,setExpandNavbar] = useState(false);
    return (
        <div className='navbar' id={expandNavbar ? "open":"close"}>
            
            <div className='toggleButton'>
                <button onClick={() => {setExpandNavbar((prev) => !prev);
                }}>
                    <ReorderIcon/>
                </button>
            </div>
            
            <div className='links'>
            <Link to="/reportfolio"> Home</Link>
            <Link to="/reportfolio/aboutme"> About Me</Link>
            <Link to="/reportfolio/portfolio"> Portfolio</Link>
            <Link to="/reportfolio/contact"> Contact</Link>
            <Link to="/reportfolio/resume"> Resume</Link>
            </div>
        </div>
    )
}

export default Navbar
