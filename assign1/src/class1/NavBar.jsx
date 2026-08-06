import React from 'react'
import './Navi.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>
        <li>About</li>
        </Link>
        <Link to={'/List'}>
        <li>List</li>
        </Link>
        <Link to={'/Service'}>
        <li>Services</li>
        </Link>
      
    </div>
  )
}

export default NavBar
