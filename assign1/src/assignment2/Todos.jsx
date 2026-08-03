import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos,setTodo]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
             setTodo(data)
        })
       
    },[])
     const todoFilter=todos.filter((todo)=>todo.completed===true)
  return (
    <div>
      <h1>Todo completed</h1>
     <ul>
        {todoFilter.map((todo)=>{
            return(
            <li key={todo.id}>
                Id:{todo.id}
                Title:{todo.title}
            </li>
       ) })}
     </ul>

      
    </div>
  )
}

export default Todos
