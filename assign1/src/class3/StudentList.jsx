import React from 'react'
import { useNavigate } from 'react-router-dom'

const StudentList = () => {
    const navi=useNavigate()
    const Students=[
        {id:1,name:"Rishab",age:19},
        {id:2,name:"Rahul",age:19}
    ]
    function fun2(id){
       navi(`/s/${id}`) 
    }
  return (
    <div>
      <ul>
            {Students.map((a)=>(
              <li key={a.id} onClick={()=>fun2(a.id)}>{a.name}</li>  
            ))}
      </ul>
    </div>
  )
}

export default StudentList
