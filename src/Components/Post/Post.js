import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {

    const {title,body,id} =post;
  
  const navigate = useNavigate()

      const handleNavigate = ( ) => {
         
        navigate(`/post/${id}`)

      }

    return (
        <div className='post'>
            <h1> title: {title} </h1>
            <p>{body}</p>
       <Link to={`/post/${id}`}> postDetails</Link>

       <button onClick={handleNavigate}>postDetails </button>
        </div>
    );
};

export default Post;