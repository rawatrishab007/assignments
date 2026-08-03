import React, { useReducer } from 'react'

const Reducer = () => {
    function reduce(state,action){
        if(action.type=="increment"){
            return state+1
        }else if(action.type=="decrement"){
            return state-1
        }else if (action.type=="reset"){
            return 0
        }else{
            return state
        }
    }
    
    let [count,dispatch]=useReducer(reduce,0)
  return (
    <div>
        <h1>{count}</h1>
     <button onClick={()=>dispatch({type:"increment"})}>+</button>
     <button onClick={()=>dispatch({type:"decrement"})}>-</button>
     <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default Reducer
