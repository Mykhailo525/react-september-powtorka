import React from 'react';
import axios from "axios";

const User = ({user,setUserDetails}) => {
    const {id,name,username}=user
    return (
        <div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>username - {username}</div>
            <button onClick={()=>{axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(value => value.data).then(value => setUserDetails([...value]))}}>User Posts</button>
        </div>
    );
};

export {User};