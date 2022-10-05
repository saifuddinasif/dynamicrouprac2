import React from 'react';
import './Post.css'

const Post = ({post}) => {

    const {title,body} =post;


    return (
        <div className='post'>
            <h1> title: {title} </h1>
            <p>{body}</p>
            <button>Show Details </button>
        </div>
    );
};

export default Post;