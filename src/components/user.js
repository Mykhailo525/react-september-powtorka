import React from 'react';

const User = ({user,setId}) => {
    const {id,name,username}=user
    return (
        <div>
            <div>id - {id}</div>
            <div>name - {name}</div>
            <div>username - {username}</div>
            <button onClick={()=>setId(id)}>User posts</button>
        </div>
    );
};

export {User};