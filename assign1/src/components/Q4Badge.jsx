import React, { useState } from 'react'

const Count = ({ totalCount }) => {
  return (
    <h3>Total: {totalCount}</h3>
  )
}
const Q4Badge = () => {
  const [task, setTask] = useState(["Task1", "Task2"])
  const [input, setInput] = useState("")

  const handle = () => {
    if (input.trim() === "") {
      return
    }
    setTask([...task, input])
    setInput("")
  }
  return (
    <div>
      <h2>TodoList <Count totalCount={task.length} /></h2>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handle}>Add</button>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default Q4Badge