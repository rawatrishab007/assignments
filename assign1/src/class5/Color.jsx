import React, { useReducer } from 'react'

const Color = () => {
    function reducer(state,action){
        if(action.type=='next'){
            if(state=='red')return 'yellow';
            if(state=='yellow')return 'green';
            if(state=='green')return 'red';

        }
        return state;
    }
    const[state,dispatch]=useReducer(reducer,'red')
    
  return (
    <div>
        <h2>{state}</h2>
      <button onClick={()=>dispatch({type:'next'})}>Change</button>
      
    </div>
  )
}

export default Color
