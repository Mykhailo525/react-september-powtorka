import React from 'react';
import {useEffect, useState} from "react";
import {postsService} from "../../services";
import css from './Post.module.css'

const Post = ({postId}) => {
    const[post,setPost]=useState(null)

    useEffect(()=>{postsService.getById(postId).then(value => value.data).then(value => setPost(value))
    },[postId])
    return (
        <div>
            <div><h1>Post info</h1></div>
            {post &&
                <div className={css.Post}>
                    <div>userId : {post.userId}</div>
                    <div>id : {post.id}</div>
                    <div>title : {post.title}</div>
                    <div>body : {post.body}</div>
                </div>
            }
        </div>
    );
};

export {Post};