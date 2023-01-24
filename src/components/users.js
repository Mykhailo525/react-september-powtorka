import React, {useEffect, useState} from 'react';
import axios from "axios";
import {User} from "./user";
import {UserPosts} from "./userPosts";

const Users = () => {
    const[users,setUsers]=useState([])
    const[id,setId]=useState(null)
    const[posts,setPosts]=useState([])

    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users')
        .then(value => value.data)
        .then(value => setUsers([...value]))},[])

    useEffect(()=>{axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
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