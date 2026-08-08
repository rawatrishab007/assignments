import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'

const StudentD = () => {
    let {id}=useParams()
    const Students=[
        {id:1,name:"Rishab",age:19},
        {id:2,name:"Rahul",age:19}
    ]
    let stud=Students.find((a)=>{ return a.id==id})
    if(!stud){
        return <NotFound/>
    }
  return (
    <>
      <div>{stud.name}</div>
      <div>{stud.age}</div>
    </>
  )
}

export default StudentD
