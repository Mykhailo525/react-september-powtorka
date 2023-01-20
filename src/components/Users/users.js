import React, {useEffect, useState} from 'react';
import axios from "axios";
import {User} from "../User/user";
import {UserPosts} from "../UserPosts/userPosts";


const Users = () => {
    const[users,setUsers]=useState([])
    const[userDetails,setUserDetails]=useState(null)
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users')
        .then(value => value.data)
        .then(value => setUsers([...value]))},[])

    return (
        <div>
            <h1>Users</h1>
            {users.map((value,index) =><User key={index+1} user={value} setUserDetails={setUserDetails}/> )}
            <h1>User Posts</h1>
            {userDetails &&  <div>{userDetails.map(comment=><UserPosts key={comment.id} posts={comment}/>)} </div>}
        </div>
    );
};

export {Users};