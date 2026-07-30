import React from 'react'

const StudentCard = ({name,age}) => {
  return (
    <div>
        <h3>Name:{name}</h3>
        <h3>Age:{age}</h3>
      
    </div>
  )
}
const Card=()=>{
    return(
    <>
    <StudentCard
    name={"Rishab"}
    age={20}></StudentCard>
    <StudentCard
    name={"Rahul"}
    age={20}></StudentCard>
    </>
    )
}

export default Card
