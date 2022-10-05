import React from 'react';

import './Frien.css'
import { Link } from 'react-router-dom';
const Frien = ({Friend}) => {
  

    const{ name, email, id, username }  = Friend
    return (
        <div  className='frien'>
            <h3>name : {name}</h3>
            <h3>email : {email}</h3>
            <h3>username : <Link to={`/friend/${id}`}>{username}</Link></h3>
        </div>
    );
};

export default Frien;