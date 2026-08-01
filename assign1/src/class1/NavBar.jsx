import React from 'react'
import './Navi.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to={'/'}>
        <li>Home</li>
        </Link>
        <Link to={'/About'}>
        <li>About</li>
        </Link>
        <Link to={'/list'}>
        <li>List</li>
        </Link>
      
    </div>
  )
}

export default NavBar
