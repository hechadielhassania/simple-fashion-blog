import React from 'react'

const Post = ({ date, title, img, content }) => {
  return (
    <div className='post'>
        <h5>{date}</h5>
        <h1>{title}</h1>
        <img src={img}  alt="huhioubob" />
        <p>{content}</p>
        <a href="#">Continues...</a>
    </div>
  )
}

export default Post