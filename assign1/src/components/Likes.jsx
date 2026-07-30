import React, { useState } from 'react'
const LikeCount=({likes})=>{
    return <h3>Likes:{likes}</h3>
}
const LikeButton=({onLike})=>{
    return <button onClick={onLike}>❤️</button>
}

const Likes = () => {
    const[like,setLike]=useState(0)
    const handleLike=()=>{
        setLike(like+1)
    }
  return (
    <>
    <h5>Question 5 like button</h5>
    <LikeCount likes={like}></LikeCount>
    <LikeButton onLike={handleLike}></LikeButton>
    
    </>
  )
}

export default Likes
