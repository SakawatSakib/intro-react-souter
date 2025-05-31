import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
     
    const {userId} = useParams();
    console.log(userId)
    // const params = useParams();
    // console.log(params.userId)
    const {website, name} = user;
    return (
        <div>
            <h3>user details here</h3>
            <h2>Name: {name}</h2>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;