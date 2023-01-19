import React from 'react';

const Post = ({post,setPostDetails}) => {
    const{userId,id,title,body}=post;
    return (
        <div>
            <div>userId - {userId}</div>
            <div>id - {id}</div>
            <div>title - {title}</div>
            <div>body - {body}</div>
            <button onClick={()=>setPostDetails(post)}>Post Info</button>
        </div>
    );
};

export {Post};