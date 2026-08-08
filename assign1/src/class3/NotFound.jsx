import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    let navi=useNavigate()

  return (
    <div>
        <h2>The page does not exist🥲</h2>
      <button onClick={()=>navi('/')}>Back to home page </button>
    </div>
  )
}

export default NotFound
