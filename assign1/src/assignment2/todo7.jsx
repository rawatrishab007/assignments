import React, { useState } from 'react'
import { id } from 'tronweb/utils'

const Todo7 = () => {
    //makeing master list 
    const[todos,setTodos]=useState([
        {
            id:1,
            title:"My name is Rishab"
        }
    ])
    //set input bar
    const[input,setInput]=useState('')
    //set new input
    const [text,setNewText]=useState('')
    //handling a new entry in the list
    const handleEntry=()=>{
        if(text.trim===''){
            return
        }
        //making way for the newEntry
        const newEntry={
            id:Date.now(),
            title:text
        }
        //adding it to the master list
        setTodos([...todos,newEntry])
        setNewText('')

    }
    //making a function to delete the element from the array
    const handleDelete=(idtoDelete)=>{
        const arr=todos.filter((todo)=>todo.id!=idtoDelete)
        setTodos(arr)
    }
    // the function to filter out the searched items in the array
    const filteTodo=todos.filter((todo)=>todo.title.toLowerCase().includes(input.toLowerCase()))
  return (
    <div>
      <h1>List of the items</h1>
      {/* Adding add input bar */}
      <input placeholder='Enter your text here' type='text' value={text} onChange={(e)=>setNewText(e.target.value)}></input>
      {/*Adding button to handleEntry  */}
      <button onClick={handleEntry}>Add</button>
      {/*Adding search bar to the screen  */}
      <input placeholder='Search todos' type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <ul>
            {filteTodo.map((todo)=>(
              <li key={todo.id}>{todo.title}
              <button onClick={()=>handleDelete(todo.id)}>Delete</button>
              </li>  
            ))}
        </ul>
    </div>
  )
}

export default Todo7
