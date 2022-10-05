import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {

    const friend =useLoaderData()
    return (
        <div>
        
     

            <h1>EVERTHING YOU NEED TO KNOW ABOUT THIS PERSON</h1>

            <h3>Details About : {friend.name}</h3>
            <h1>Call her : {friend.phone}</h1>
        </div>
    );
};

export default FriendDetails;