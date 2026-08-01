import React, { useEffect, useState } from 'react'

const Todo2 = () => {
    const[todo,setTodo]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then((data)=>setTodo(data))
    },[])
  return (
    <div>
      <h1>Top 10 todo</h1>
      {
        <ul>
            {todo.slice(0,10).map((todo)=>(
                <li>
                    Id:{todo.id}
                    Title:{todo.title}
                </li>
            ))}
        </ul>
      }
    </div>
  )
}

export default Todo2
