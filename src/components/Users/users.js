import React, {useEffect, useState} from 'react';

import {User} from "../User/user";
import {UserPosts} from "../UserPosts/userPosts";
import {userService} from "../../services";

const Users = () => {

    const[users,setUsers]=useState([])
    const[id,setId]=useState(null)
    const[posts,setPosts]=useState([])


    useEffect(()=>{userService.getAll()
        .then(value => value.data)
        .then(value => setUsers([...value]))},[])


    useEffect(()=>{userService.getPostsById(id)
        .then(value => value.data)
        .then(value => setPosts([...value]))},[id])

    return (
        <div>
            <h1>Users</h1>
            {users.map((value,index) =><User key={index} user={value} setId={setId} />)}
            <h1>User posts</h1>
            {posts.map((value,index) =><UserPosts key={index} post={value}/>)}
        </div>
    );
};

export {Users};