import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className='Navigation'>
        <Link to={'/'}>
        <li>Home</li>
        </Link>
        <Link to={'/projects'}><li>Project</li> </Link>
        <Link to={'/resume'}><li>Resume</li></Link>
      </div>
    </div>
  )
}

export default Navigation
