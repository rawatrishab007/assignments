import React, { useReducer } from 'react'
import Reducer from './Reducer'

const LikeDislike = () => {
    let initialState={likes:0,dislikes:0}
    function reducer(state,action){
        if(action.type=='like'){
            return{
                ...state,
                likes:state.likes+1,
            }

        }else if(action.type=='dislike'){
            return{
                ...state,
                dislikes:state.dislike+1,
            }
        }
    }
     
    let [state,dispatch]=useReducer(reducer,initialState)
  return (
    
    <div>
        <h2>{state.like}</h2>
        <h2>{state.dislike}</h2>
      <button onClick={()=>dispatch({type:'like'})}>Like❤️</button>
      <button onClick={()=>dispatch({type:'dislike'})}>Dislike👎</button>
    </div>
  )
}

export default LikeDislike
