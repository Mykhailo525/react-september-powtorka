import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";

import {userService} from "../../services/userService";
import {SelectedPost} from "../SelectedPost/selectedPost";


const Posts = () => {
    const[posts,setPosts]=useState([])
    const[postDetails,setPostDetails]=useState(null)

    useEffect(()=>{
       userService.getAll().then(value => value.data).then(value => setPosts([...value]))
    },[])





    return (
        <div>
            <h1>Post</h1>
            {postDetails && <SelectedPost post={postDetails}/>}
            <hr/>
            <h1>Posts</h1>
            {posts.map(item=><Post key={item.id} post={item} setPostDetails={setPostDetails}/>)}
        </div>
    );
};

export {Posts};