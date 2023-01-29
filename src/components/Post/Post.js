import React from 'react';
import {useEffect, useState} from "react";
import {postsService} from "../../services";

const Post = ({postId}) => {
    const[post,setPost]=useState(null)

    useEffect(()=>{postsService.getById(postId).then(value => value.data).then(value => setPost(value))
    },[])
    return (
        <div>
            {post &&
                <>
                    <div>userId : {post.userId}</div>
                    <div>id : {post.id}</div>
                    <div>title : {post.title}</div>
                    <div>body : {post.body}</div>
                </>
            }
        </div>
    );
};

export {Post};