import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {
    let navi=useNavigate
    const products=[
        {
            id:1,
            name:"iPhone16",
            price:80000,
        },
        {
            id:2,
            name:"samsung",
            price:50000,
        }
    ]
    function fun1(id){
        navi(`/p/${id}`)
    }
  return (
    <div>
      <>
      {products.map((a)=>{
        return(
            <>
            <li onClick={()=>fun1(a.id)}>{a.name}</li>
            </>
        )
      })}
      </>
    </div>
  )
}

export default ProductList
