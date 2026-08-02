import React, { useEffect, useState } from 'react';

const DeleteTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 15)); 
      });
  }, []);

  const handleDelete=(idtoDelete)=>{
    const updatedTodos=todos.filter((todo)=>todo.id!==idtoDelete)
    setTodos(updatedTodos)
  }

  return (
    <div>
      <h2>Q4: Delete a Todo</h2>
      <p>Total items: {todos.length}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            <span>
              <strong>ID {todo.id}:</strong> {todo.title}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              style={{ marginLeft: '12px', color: 'red', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteTodo;