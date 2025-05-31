import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    console.log('user details2:',name,username);
    return (
        <div>
            <p><small> user name : {username}</small></p>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserDetails2;