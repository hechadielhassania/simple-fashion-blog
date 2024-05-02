import React from 'react';
import Post from './Post.jsx';
import Data from '../data.json'
import image1 from '../img/blog-image-1.jpg'; // Import your image files
import image2 from '../img/blog-image-2.jpg';


const Posts = () => {
  
  return (
    <div>
      {Data.map((post, index) => (
        <Post
          key={post.date} 
          date={post.date}
          title={post.title}
          // img={`img/${post.img}`}
          img={index === 0 ? image1 : image2}
          content={post.content}
        />
      ))}
    </div>
  )
}

export default Posts