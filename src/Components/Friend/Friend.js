import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friend = () => {

    const friends = useLoaderData();


    return (
        <div>
            <h1>I have so many friends : {friends.length} </h1>
        </div>
    );
};

export default Friend;