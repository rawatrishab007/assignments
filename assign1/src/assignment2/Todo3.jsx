import React, { useEffect, useState } from 'react'

const Todo3 = () => {
    const[todos,setTodos]=useState([])
    const[selectedFilter,setSelectedFilter]=useState(1)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then((data)=>setTodos(data))
    },[])
    const done=todos.filter((todo)=>todo.userId===selectedFilter)
  return (
    <div>
    <h2>Display specific kind of buttons</h2>
    <button onClick={()=>setSelectedFilter(1)}>User1</button>
    <button onClick={()=>setSelectedFilter(2)}>User2</button>
    <button onClick={()=>setSelectedFilter(3)}>User3</button>
    <h2>Displaying user id and title</h2>
    <ul>
        {
            done.map((todo)=>{
                return(
                <li key={todo.id}>
                    Id:{todo.id}
                    Title:{todo.title}
                </li>)
})
        }
    </ul>
    </div>
  )
}

export default Todo3
