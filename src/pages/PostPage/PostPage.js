import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postsService} from "../../services";

const PostPage = () => {
    const {postId}=useParams();

    const[post,setPost]=useState(null)

    useEffect((postId)=>{postsService.getById().then(value => value.data).then(value =>setPost(value))},[])
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

export {PostPage};