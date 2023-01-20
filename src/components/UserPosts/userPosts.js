import React from 'react';

const UserPosts = ({posts}) => {
    const {userId,id,title}=posts
    return (
        <div>
            <div>userId - {userId}</div>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <hr/>
        </div>
    );
};

export {UserPosts};