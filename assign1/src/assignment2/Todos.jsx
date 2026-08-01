import React, { useEffect, useState } from 'react'

const Todos = () => {
    const [todos,SetTodos]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then((data)=>{
          console.log(data)  
          SetTodos(data)
        })
    },[])
    const CompletedTodos=todos.filter(todo=>todo.completed===true)
  return (
    <div>
      <h2>Completed todos</h2>
      <ul>
        {
            CompletedTodos.map(todo=>(
                <li key={todo.id}>
                    Id:{todo.id}
                    {todo.title}
                </li>
                
            ))
        }
      </ul>

    </div>
  )
}

export default Todos
