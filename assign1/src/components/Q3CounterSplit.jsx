import React, { useState } from 'react'
const Display=({count})=>{
    return <h2>{count}</h2>
}
const Controls=({count,SetCount})=>{
    return(
        <>
        <button onClick={()=>SetCount(count+1)}>increase</button>
        <button onClick={()=>SetCount(count-1)}>Decrease</button>
        </>
    )
}

const Q3CounterSplit = () => {
    const [count,SetCount]=useState(0);
  return (
    <div>
      <Display count={count}></Display>
      <Controls count={count} SetCount={SetCount}></Controls>
    </div>
  )
}

export default Q3CounterSplit
