import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Frien from '../Frien/Frien';

const Friend = () => {

    const friends = useLoaderData();


    return (
        <div>
            <h1>I have so many friends : {friends.length} </h1>

            {
                friends.map(Friend => <Frien
                
                key={Friend.id}
                Friend={Friend}
                
                ></Frien>)
            }
        </div>
    );
};

export default Friend;