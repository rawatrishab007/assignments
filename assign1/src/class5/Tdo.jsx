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
                input:action.payload,
                
                
                
            }
        }else if(action.type=="add"){
            return
                ...state,
                list:list.state[...state.list,state.input],
                
            }
        }else if(action.type=="del"){
            return{
                ...state,
                list:state.list.filter((_,id)=>id!=action.payload)
            }
        }
       

    }
    let [state,dispatch]=useReducer(reducer,data)
  return (
    <div>
        <h1> Todo list </h1>
      <input onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}></input>
      <button onClick={()=>dispatch({type:"add"})}>add</button>
      <button onClick={()=>dispatch({type:"del",payload:idx})}>Delete</button>
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
