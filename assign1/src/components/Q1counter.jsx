import { useState } from 'react'


function Q1counter() {
  let[count,SetCount]=useState(0);
  const increase = () => {
    if (count < 10) SetCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) SetCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>SetCount(increase)}>increase</button>
      <button onClick={()=>SetCount(decrease)}>Decrease</button>
    </>
  )
}

export default Q1counter