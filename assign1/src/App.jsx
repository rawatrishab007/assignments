import React from 'react'
import Q1Counter from './components/Q1counter'
import StudentCard from './components/StudentCard'
import Q3CounterSplit from './components/Q3CounterSplit'
import Q4Badge from './components/Q4Badge'

const App = () => {
  return (
    <div>
      <h1>Question1</h1>
      <Q1Counter />
      <h1>Question2</h1>
     <StudentCard/>
     <h1>Question3</h1>
     <Q3CounterSplit/>
     <h1>Question4</h1>
     <Q4Badge/>
    </div>
  )
}

export default App