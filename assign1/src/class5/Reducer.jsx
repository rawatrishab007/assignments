import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type=="inc"){
        return state+1
    }else if(action.type=="dec"){
        return state-1
    }else if(action.type=="reset"){
        return 0
    }else{
        return state
    }
}

const Reducer = () => {
    const[state,dispatch]=useReducer(reducer,0)
  return (
    <div>
        <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"inc"})}>+</button>
      <button onClick={()=>dispatch({type:"dec"})}>-</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Reducer
