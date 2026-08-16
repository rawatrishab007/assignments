import React, { useReducer } from 'react'
const Tdo = () => {
    let data={input:"",list:[]}
    function reducer(state,action){
        if(action.type=='inp'){
            return {...state,input:action.payload}
        }else if(action.type=='add'){
           return{
            ...state,
            list:[...state.list,state.input],
            input:""

           }

        }else if(action.type=='d'){
            return{
                ...state,
                list:state.list.filter((_,id)=>id!=action.payload)
            }
        }
    }
    const[state,dispatch]=useReducer(reducer,data)
  return (
    <div>
      <input value={state.input} onChange={(e)=>dispatch({type:'inp',payload:e.target.value})}></input>
      <button onClick={() => dispatch({ type: "add" })}>add</button>
      {
    state.list.map((a, id) => {
    return <li key={id} onClick={() => dispatch({ type: "d", payload: id })}>{a}</li>;
    })
}
    </div>
  )
}

export default Tdo
