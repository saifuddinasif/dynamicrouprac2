import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetals = () => {

    const post = useLoaderData()

    const navigate =useNavigate();


    const handleNavigate = () => {

        navigate(`/Friend/${userId}`)
    }
       
     const {id,title, body,userId} =post

    return (
        <div>
            <h1>POst no :{id} </h1>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get Author </button>
        </div>
    );
};

export default PostDetals;