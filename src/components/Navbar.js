import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/css/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar,setExpandNavbar] = useState(false);
    return (
        <div className='navbar'>

            <div className='toggleButton'>
                <button onClick={() => {setExpandNavbar((prev) => !prev);
                }}>
                    <ReorderIcon/>
                </button>
            </div>
            <div className='links'>
            <Link to="/"> Home</Link>
            <Link to="/aboutme"> About Me</Link>
            <Link to="/portfolio"> Portfolio</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/resume"> Resume</Link>
            </div>
        </div>
    )
}

export default Navbar
