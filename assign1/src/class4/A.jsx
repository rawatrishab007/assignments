import React, { useContext } from 'react'
import Context from './Context'

const A = () => {
    let data=useContext(Context)
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default A
