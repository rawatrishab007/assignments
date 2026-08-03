import React, { useReducer } from 'react'

const Tdo = () => {
    let data={
        input:"",
        list:[]
        
    }
    function reducer(state,action){
        if(action.type=="inp"){
            return {
                ...state,
                input:action.payload
            }
        }else if(action.type=="add"){
            return{
                ...state,
                list:[...state.list,state.input]
            }
        }

    }
    let [state,dispatch]=useReducer(reducer,data)
  return (
    <div>
      <input onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}></input>
      <button onClick={()=>dispatch({type:"add"})}>add</button>
      {
        state.list.map((a)=>{
            return(
                <>
                <li>{a}</li>
                </>
            )
        })
      }
    </div>
  )
}

export default Tdo
